#!/usr/bin/env node

/**
 * test-all.mjs -- Basic verification suite for Venture-Ops
 *
 * Usage:
 *   node test-all.mjs
 */

import { execSync } from 'child_process';
import { existsSync, readdirSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = __dirname;

let passed = 0;
let failed = 0;

function pass(msg) {
  console.log(`  OK ${msg}`);
  passed += 1;
}

function fail(msg) {
  console.log(`  FAIL ${msg}`);
  failed += 1;
}

function run(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: 'utf-8', timeout: 30000 }).trim();
  } catch {
    return null;
  }
}

console.log('\nVenture-Ops test suite\n');

console.log('1. Syntax checks');
for (const file of readdirSync(ROOT).filter((name) => name.endsWith('.mjs'))) {
  run(`node --check ${file}`) !== null ? pass(`${file} syntax OK`) : fail(`${file} syntax error`);
}

console.log('\n2. Required files');
for (const file of [
  'AGENTS.md',
  'CLAUDE.md',
  'DATA_CONTRACT.md',
  'README.md',
  'doctor.mjs',
  'scan-investors.mjs',
  'verify-pipeline.mjs',
  'generate-deck.mjs',
  'templates/deck-template.html',
  'templates/investors.example.yml',
  'modes/_shared.md',
  'modes/scan.md',
  'modes/deck.md',
  'modes/apply.md',
]) {
  existsSync(join(ROOT, file)) ? pass(`present: ${file}`) : fail(`missing: ${file}`);
}

console.log('\n3. Core script execution');
for (const cmd of [
  'node doctor.mjs',
  'node verify-pipeline.mjs',
  'node scan-investors.mjs --dry-run',
]) {
  run(cmd) !== null ? pass(`${cmd} runs`) : fail(`${cmd} failed`);
}

console.log('\n4. Branding smoke check');
const brandingResult = run(`rg -n "career-ops|santifer/career-ops|/career-ops" README.md CLAUDE.md DATA_CONTRACT.md CITATION.cff CONTRIBUTING.md SUPPORT.md LEGAL_DISCLAIMER.md GOVERNANCE.md CODE_OF_CONDUCT.md SECURITY.md docs update-system.mjs doctor.mjs .github -g '!node_modules'`);
if (!brandingResult) {
  pass('no stale career-ops branding in tracked docs and scripts');
} else {
  fail('stale career-ops branding remains');
  console.log(brandingResult);
}

console.log('\n5. Public asset check');
for (const asset of [
  'assets/readme/venture-ops-overview.png',
  'assets/readme/deck-intake-sanitized.png',
  'assets/readme/live-vc-summary.png',
]) {
  existsSync(join(ROOT, asset)) ? pass(`asset present: ${asset}`) : fail(`missing asset: ${asset}`);
}

console.log('\n6. Package metadata');
const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));
pkg.name === 'venture-ops' ? pass('package name is venture-ops') : fail('package name mismatch');

console.log(`\nSummary: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
