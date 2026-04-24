# Setup Guide

## Prerequisites

- Node.js 18+
- Playwright Chromium for PDF generation
- An AI coding environment such as Claude Code, Codex, or OpenCode

## Quick Start

### 1. Clone and install

```bash
git clone https://github.com/Desperado/venture-ops.git
cd venture-ops
npm install
npx playwright install chromium
```

### 2. Initialize local files

```bash
npm run doctor
```

This creates local starter files if they are missing.

### 3. Fill in your startup context

Edit:

- `startup.md`
- `founder-bio.md`
- `traction-digest.md`
- `market-watch.md`
- `config/profile.yml`
- `investors.yml`

### 4. Run a first scan

```bash
npm run scan -- --dry-run
```

### 5. Generate a first deck

```bash
npm run deck -- templates/deck-template.html output/sample-deck.pdf
```

## Agent Commands

| Action | How |
|--------|-----|
| Scan configured targets | `/venture-ops scan` |
| Evaluate one target | `/venture-ops evaluate {url}` |
| Refresh a deck from live context | `/venture-ops refresh` |
| Generate a deck draft | `/venture-ops deck {target}` |
| Draft application or intro copy | `/venture-ops apply {target}` |
| Process inbox | `/venture-ops pipeline` |
| Review tracker status | `/venture-ops tracker` |

## Verify Setup

```bash
npm run doctor
npm run verify
npm run scan -- --dry-run
```
