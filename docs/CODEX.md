# Codex Setup

Venture-Ops supports Codex through the root `AGENTS.md` file. Codex should reuse the checked-in mode files, templates, tracker flow, and scripts.

## Prerequisites

- Node.js 18+
- Playwright Chromium for PDF generation

## Install

```bash
npm install
npx playwright install chromium
npm run doctor
```

## Routing Map

| User intent | Files Codex should read |
| --- | --- |
| Raw investor/program URL or description | `modes/_shared.md` + `modes/auto-pipeline.md` |
| Single target evaluation | `modes/_shared.md` + `modes/evaluate.md` |
| Pitch deck generation | `modes/_shared.md` + `modes/deck.md` |
| Investor/accelerator scan | `modes/_shared.md` + `modes/scan.md` |
| Application/outreach support | `modes/_shared.md` + `modes/apply.md` |
| Pipeline inbox processing | `modes/_shared.md` + `modes/pipeline.md` |
| Tracker status | `modes/tracker.md` |
| Deep research | `modes/deep.md` |

## Behavioral Rules

- Keep all personalization in `startup.md`, `founder-bio.md`, `traction-digest.md`, `market-watch.md`, `config/profile.yml`, `modes/_profile.md`, or `investors.yml`.
- Never submit applications or send outreach for the user.
- Browse to verify current investor/accelerator facts, deadlines, partners, terms, startup front-page claims, and market/news references.
- Use the tracker and pipeline files instead of ad hoc notes.
