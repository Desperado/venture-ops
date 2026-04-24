#!/usr/bin/env node

import { readFileSync, writeFileSync, appendFileSync, existsSync } from 'fs';
import yaml from 'js-yaml';

const INVESTORS_PATH = 'investors.yml';
const PROFILE_PATH = 'config/profile.yml';
const PIPELINE_PATH = 'data/pipeline.md';
const HISTORY_PATH = 'data/scan-history.tsv';
const TARGETS_PATH = 'data/targets.md';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const typeIdx = args.indexOf('--type');
const typeFilter = typeIdx >= 0 ? args[typeIdx + 1]?.toLowerCase() : null;

function readYaml(path, fallback = {}) {
  if (!existsSync(path)) return fallback;
  return yaml.load(readFileSync(path, 'utf8')) || fallback;
}

function list(value) {
  return Array.isArray(value) ? value.map((v) => String(v).toLowerCase()) : [];
}

function overlaps(a, b) {
  const left = list(a);
  const right = list(b);
  return left.length === 0 || right.length === 0 || left.some((x) => right.includes(x) || right.includes('global') || right.includes('remote'));
}

function loadSeen() {
  const seen = new Set();
  for (const path of [PIPELINE_PATH, HISTORY_PATH, TARGETS_PATH]) {
    if (!existsSync(path)) continue;
    const text = readFileSync(path, 'utf8').toLowerCase();
    for (const match of text.matchAll(/https?:\/\/[^\s|)]+/g)) {
      seen.add(match[0].replace(/\/$/, ''));
    }
  }
  return seen;
}

function scoreTarget(target, profile, filters) {
  let score = 0;
  const reasons = [];
  const targeting = profile.targeting || {};
  const startup = profile.startup || {};
  const raise = profile.raise || {};

  if (!typeFilter || String(target.type || '').toLowerCase() === typeFilter) score += 0.5;
  if (list(targeting.investor_types).includes(String(target.type || '').toLowerCase())) {
    score += 0.6;
    reasons.push('type');
  }
  if (overlaps(target.stages, targeting.stages || [startup.stage, raise.round])) {
    score += 1.0;
    reasons.push('stage');
  }
  if (overlaps(target.sectors, targeting.sectors || startup.sector_tags)) {
    score += 1.2;
    reasons.push('sector');
  }
  if (overlaps(target.geographies, targeting.geographies || [startup.geography])) {
    score += 0.8;
    reasons.push('geo');
  }
  if (!target.check_size_usd || !raise.min_check_usd || Number(target.check_size_usd) >= Number(raise.min_check_usd)) {
    score += 0.5;
    reasons.push('check');
  }
  if (target.notes) score += 0.4;

  const normalized = Math.min(5, Math.max(1, score));
  const min = Number(filters.min_fit_score || 0);
  return { score: normalized, reasons, pass: normalized >= min };
}

function ensureFiles() {
  if (!existsSync(PIPELINE_PATH)) {
    writeFileSync(PIPELINE_PATH, '# Target Pipeline Inbox\n\n## Pending\n\n## Processed\n', 'utf8');
  }
  if (!existsSync(HISTORY_PATH)) {
    writeFileSync(HISTORY_PATH, 'url\tfirst_seen\ttype\tstage\ttarget\tstatus\n', 'utf8');
  }
}

function appendMatches(matches) {
  let pipeline = readFileSync(PIPELINE_PATH, 'utf8');
  const marker = '## Pending';
  const insertAt = pipeline.includes(marker) ? pipeline.indexOf(marker) + marker.length : pipeline.length;
  const block =
    '\n' +
    matches
      .map((m) => `- [ ] ${m.target.url} | ${m.target.name} | ${m.target.type || 'target'} | score ${m.score.toFixed(1)}/5 | ${m.reasons.join(', ')}`)
      .join('\n') +
    '\n';
  pipeline = pipeline.slice(0, insertAt) + block + pipeline.slice(insertAt);
  writeFileSync(PIPELINE_PATH, pipeline, 'utf8');

  const today = new Date().toISOString().slice(0, 10);
  appendFileSync(
    HISTORY_PATH,
    matches
      .map((m) => `${m.target.url}\t${today}\t${m.target.type || ''}\t${(m.target.stages || []).join(',')}\t${m.target.name}\tadded`)
      .join('\n') + '\n',
    'utf8',
  );
}

function main() {
  if (!existsSync(INVESTORS_PATH)) {
    console.error('Error: investors.yml not found. Copy templates/investors.example.yml first.');
    process.exit(1);
  }

  ensureFiles();
  const config = readYaml(INVESTORS_PATH, { filters: {}, targets: [] });
  const profile = readYaml(PROFILE_PATH, {});
  const seen = loadSeen();
  const matches = [];

  for (const target of config.targets || []) {
    if (!target.url || !target.name) continue;
    const normalizedUrl = String(target.url).toLowerCase().replace(/\/$/, '');
    if (seen.has(normalizedUrl)) continue;
    if (typeFilter && String(target.type || '').toLowerCase() !== typeFilter) continue;
    const scored = scoreTarget(target, profile, config.filters || {});
    if (scored.pass) matches.push({ target, ...scored });
  }

  matches.sort((a, b) => b.score - a.score);

  if (dryRun) {
    console.log(`Dry run: ${matches.length} matching targets`);
    for (const m of matches) {
      console.log(`${m.score.toFixed(1)}/5\t${m.target.name}\t${m.target.type || ''}\t${m.target.url}`);
    }
    return;
  }

  appendMatches(matches);
  console.log(`Added ${matches.length} targets to ${PIPELINE_PATH}`);
}

main();
