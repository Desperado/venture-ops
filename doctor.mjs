#!/usr/bin/env node

import { existsSync, copyFileSync, mkdirSync, writeFileSync } from 'fs';

function ensureDir(path) {
  mkdirSync(path, { recursive: true });
}

function ok(msg) {
  console.log(`OK: ${msg}`);
}

function warn(msg) {
  console.log(`WARN: ${msg}`);
}

ensureDir('data');
ensureDir('reports');
ensureDir('output');
ensureDir('batch/logs');
ensureDir('batch/tracker-additions');

if (!existsSync('config/profile.yml') && existsSync('config/profile.example.yml')) {
  copyFileSync('config/profile.example.yml', 'config/profile.yml');
  warn('Created config/profile.yml from example; fill it with real startup details.');
}

if (!existsSync('investors.yml') && existsSync('templates/investors.example.yml')) {
  copyFileSync('templates/investors.example.yml', 'investors.yml');
  warn('Created investors.yml from example; customize target universe.');
}

if (!existsSync('modes/_profile.md') && existsSync('modes/_profile.template.md')) {
  copyFileSync('modes/_profile.template.md', 'modes/_profile.md');
  warn('Created modes/_profile.md from template.');
}

if (!existsSync('startup.md')) writeFileSync('startup.md', '# Startup Source of Truth\n\nTODO\n', 'utf8');
if (!existsSync('founder-bio.md')) writeFileSync('founder-bio.md', '# Founder Bio\n\nTODO\n', 'utf8');
if (!existsSync('traction-digest.md')) writeFileSync('traction-digest.md', '# Traction Digest\n\nTODO\n', 'utf8');
if (!existsSync('market-watch.md')) writeFileSync('market-watch.md', '# Market Watch\n\nTODO\n', 'utf8');
if (!existsSync('data/targets.md')) {
  writeFileSync('data/targets.md', '# Fundraising Tracker\n\n| # | Date | Target | Type | Stage | Fit | Status | Deck | Report | Notes |\n|---|------|--------|------|-------|-----|--------|------|--------|-------|\n', 'utf8');
}
if (!existsSync('data/pipeline.md')) {
  writeFileSync('data/pipeline.md', '# Target Pipeline Inbox\n\n## Pending\n\n## Processed\n', 'utf8');
}
if (!existsSync('data/scan-history.tsv')) {
  writeFileSync('data/scan-history.tsv', 'url\tfirst_seen\ttype\tstage\ttarget\tstatus\n', 'utf8');
}

for (const file of ['startup.md', 'founder-bio.md', 'traction-digest.md', 'market-watch.md', 'config/profile.yml', 'modes/_profile.md', 'investors.yml', 'data/targets.md', 'data/pipeline.md']) {
  existsSync(file) ? ok(`${file} exists`) : warn(`${file} missing`);
}

console.log('Venture-Ops doctor complete.');
