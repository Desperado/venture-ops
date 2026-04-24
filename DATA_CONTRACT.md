# Data Contract

This document defines which files belong to the founder/user layer and which belong to the Venture-Ops system layer.

## User Layer (never auto-updated)

| File | Purpose |
| --- | --- |
| `startup.md` | Company source of truth, product, market, traction, roadmap |
| `founder-bio.md` | Founder background, credibility, unfair advantages |
| `traction-digest.md` | Compact proof points, metrics, customer notes, case studies |
| `market-watch.md` | Recent news, market shifts, timing hooks, competitor signals |
| `config/profile.yml` | Raise profile, stage, geography, target investor filters |
| `modes/_profile.md` | Founder-specific scoring notes, narrative, objections, positioning |
| `investors.yml` | Customized investor and accelerator universe |
| `data/targets.md` | Fundraising tracker |
| `data/pipeline.md` | Target inbox |
| `data/scan-history.tsv` | Scanner dedup history |
| `data/follow-ups.md` | Follow-up history |
| `reports/*` | Target fit reports |
| `output/*` | Generated decks, memos, one-pagers, PDFs |

## System Layer (safe to update)

| File | Purpose |
| --- | --- |
| `modes/_shared.md` | Shared scoring rubric and global rules |
| `modes/*.md` | Workflow instructions |
| `templates/*` | Base templates |
| `*.mjs` | Utility scripts |
| `docs/*` | Documentation |
| `scripts/*` | Helper scripts such as README asset generation |
| `CLAUDE.md`, `AGENTS.md` | Agent instructions |

## Rule

If it describes this founder, this startup, this fundraise, or private traction, it belongs in the user layer.
