#!/usr/bin/env node

import { readFileSync, existsSync } from 'fs';

const TRACKER = 'data/targets.md';
if (!existsSync(TRACKER)) {
  console.log('No tracker found.');
  process.exit(0);
}

const rows = readFileSync(TRACKER, 'utf8').split('\n').filter((line) => line.startsWith('|') && !line.includes('---') && !line.includes('Target | Type'));
const actionable = [];

for (const row of rows) {
  const p = row.split('|').map((x) => x.trim());
  if (p.length < 10) continue;
  const status = p[7]?.toLowerCase();
  if (['contacted', 'replied', 'meeting', 'diligence', 'intro-needed'].includes(status)) {
    actionable.push({ target: p[3], status, notes: p[10] || '' });
  }
}

console.log(`Follow-up review: ${actionable.length} actionable targets`);
for (const item of actionable) {
  console.log(`${item.status}\t${item.target}\t${item.notes}`);
}
