#!/usr/bin/env node

/**
 * update-system.mjs -- Safe auto-updater for Venture-Ops
 *
 * Updates only checked-in system files.
 * Never touches founder-specific data or generated outputs.
 *
 * Usage:
 *   node update-system.mjs check
 *   node update-system.mjs apply
 *   node update-system.mjs rollback
 *   node update-system.mjs dismiss
 */

import { execFileSync, execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = __dirname;

const CANONICAL_REPO = 'https://github.com/Desperado/venture-ops.git';
const RAW_VERSION_URL = 'https://raw.githubusercontent.com/Desperado/venture-ops/main/VERSION';
const RELEASES_API = 'https://api.github.com/repos/Desperado/venture-ops/releases/latest';

const SYSTEM_PATHS = [
  'modes/',
  'templates/',
  'docs/',
  'scripts/',
  'AGENTS.md',
  'CLAUDE.md',
  'DATA_CONTRACT.md',
  'README.md',
  'LICENSE',
  'CITATION.cff',
  'CONTRIBUTING.md',
  'GOVERNANCE.md',
  'CODE_OF_CONDUCT.md',
  'LEGAL_DISCLAIMER.md',
  'SECURITY.md',
  'SUPPORT.md',
  'doctor.mjs',
  'generate-deck.mjs',
  'generate-pdf.mjs',
  'scan-investors.mjs',
  'scan.mjs',
  'verify-pipeline.mjs',
  'followup-cadence.mjs',
  'update-system.mjs',
  'test-all.mjs',
  'package.json',
  'VERSION',
  '.github/',
];

const USER_PATHS = [
  'startup.md',
  'founder-bio.md',
  'traction-digest.md',
  'market-watch.md',
  'config/profile.yml',
  'modes/_profile.md',
  'investors.yml',
  'data/',
  'reports/',
  'output/',
];

function localVersion() {
  const vPath = join(ROOT, 'VERSION');
  return existsSync(vPath) ? readFileSync(vPath, 'utf-8').trim() : '0.0.0';
}

function compareVersions(a, b) {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  for (let i = 0; i < 3; i++) {
    if ((pa[i] || 0) < (pb[i] || 0)) return -1;
    if ((pa[i] || 0) > (pb[i] || 0)) return 1;
  }
  return 0;
}

function git(...args) {
  return execFileSync('git', args, { cwd: ROOT, encoding: 'utf-8', timeout: 30000 }).trim();
}

function gitStatusEntries() {
  const status = git('status', '--porcelain');
  if (!status) return [];
  return status.split('\n').filter(Boolean).map((line) => ({ code: line.slice(0, 2), path: line.slice(3) }));
}

function revertPaths(paths) {
  if (paths.length === 0) return;
  git('checkout', '--', ...paths);
}

function latestVersionFromRemote() {
  try {
    return execSync(`curl -fsSL ${RAW_VERSION_URL}`, { encoding: 'utf-8', timeout: 30000 }).trim();
  } catch {
    return null;
  }
}

function check() {
  const local = localVersion();
  const remote = latestVersionFromRemote();
  if (!remote) {
    console.log(JSON.stringify({ status: 'offline', local }, null, 2));
    return;
  }

  const cmp = compareVersions(local, remote);
  const status = cmp < 0 ? 'update-available' : 'up-to-date';
  console.log(JSON.stringify({ status, local, remote, repo: CANONICAL_REPO }, null, 2));
}

function apply() {
  const statusEntries = gitStatusEntries();
  const blocking = statusEntries.filter((entry) =>
    SYSTEM_PATHS.some((path) => entry.path === path || entry.path.startsWith(path))
  );

  if (blocking.length > 0) {
    console.error('Refusing to update because system files have local modifications:');
    for (const entry of blocking) console.error(`  ${entry.code} ${entry.path}`);
    process.exit(1);
  }

  const before = git('rev-parse', 'HEAD');
  git('fetch', '--depth=1', 'origin', 'main');
  git('checkout', 'FETCH_HEAD', '--', ...SYSTEM_PATHS);
  writeFileSync(join(ROOT, '.last-update-head'), before, 'utf8');
  console.log('System layer updated from origin/main.');
  console.log('Founder-specific files were not touched.');
}

function rollback() {
  const marker = join(ROOT, '.last-update-head');
  if (!existsSync(marker)) {
    console.error('No rollback marker found.');
    process.exit(1);
  }

  const head = readFileSync(marker, 'utf8').trim();
  git('checkout', head, '--', ...SYSTEM_PATHS);
  unlinkSync(marker);
  console.log('Rolled back the last system-layer update.');
}

function dismiss() {
  writeFileSync(join(ROOT, '.update-dismissed'), String(Date.now()), 'utf8');
  console.log('Update check dismissed.');
}

const command = process.argv[2] || 'check';

switch (command) {
  case 'check':
    check();
    break;
  case 'apply':
    apply();
    break;
  case 'rollback':
    rollback();
    break;
  case 'dismiss':
    dismiss();
    break;
  default:
    console.log('Usage: node update-system.mjs [check|apply|rollback|dismiss]');
    process.exit(1);
}
