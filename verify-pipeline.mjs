#!/usr/bin/env node

import { readFileSync, existsSync, readdirSync } from 'fs';

const TRACKER = 'data/targets.md';
const REPORTS = 'reports';
const VALID = new Set(['queued', 'evaluated', 'prepare', 'intro-needed', 'contacted', 'replied', 'meeting', 'diligence', 'committed', 'rejected', 'skipped']);

let errors = 0;
let warnings = 0;

const error = (msg) => {
  console.log(`ERROR: ${msg}`);
  errors += 1;
};

const warn = (msg) => {
  console.log(`WARN: ${msg}`);
  warnings += 1;
};

const ok = (msg) => console.log(`OK: ${msg}`);

if (!existsSync(TRACKER)) {
  console.log('No data/targets.md found yet. Run doctor or create tracker first.');
  process.exit(0);
}

const text = readFileSync(TRACKER, 'utf8');
const rows = text.split('\n').filter((line) => line.startsWith('|') && !line.includes('---') && !line.includes('Target | Type'));
const entries = [];

for (const row of rows) {
  const p = row.split('|').map((x) => x.trim());
  if (p.length < 10) continue;
  const num = Number(p[1]);
  if (!Number.isNaN(num)) {
    entries.push({ num, target: p[3], fit: p[6], status: p[7], report: p[9] });
  }
}

const seen = new Set();
for (const entry of entries) {
  const key = entry.target.toLowerCase();
  if (seen.has(key)) warn(`Possible duplicate target: ${entry.target}`);
  seen.add(key);

  const status = entry.status.toLowerCase().replace(/\*\*/g, '').trim();
  if (status && !VALID.has(status)) error(`#${entry.num}: non-canonical status "${entry.status}"`);

  const fit = entry.fit.replace(/\*\*/g, '').trim();
  if (fit && fit !== 'N/A' && !/^\d+(\.\d+)?\/5$/.test(fit)) {
    error(`#${entry.num}: invalid fit score "${entry.fit}"`);
  }

  const match = entry.report.match(/\]\(([^)]+)\)/);
  if (match && !existsSync(match[1])) error(`#${entry.num}: report not found ${match[1]}`);
}

if (existsSync(REPORTS)) {
  const reportCount = readdirSync(REPORTS).filter((file) => file.endsWith('.md')).length;
  ok(`${reportCount} reports present`);
}

ok(`${entries.length} tracker entries checked`);
console.log(`Summary: ${errors} errors, ${warnings} warnings`);
process.exit(errors > 0 ? 1 : 0);
