# Venture-Ops -- AI Fundraising Pipeline

Venture-Ops is a founder-side fundraising system for investor discovery, accelerator fit, pitch-deck generation, application support, outreach drafting, pipeline tracking, follow-up cadence, and narrative learning.

## Data Contract

There are two layers.

**User Layer (never auto-updated, personalization goes here):**
- `startup.md`, `founder-bio.md`, `traction-digest.md`, `market-watch.md`
- `config/profile.yml`, `modes/_profile.md`, `investors.yml`
- `data/*`, `reports/*`, `output/*`

**System Layer (safe to update):**
- `modes/_shared.md`, all other checked-in mode files
- `CLAUDE.md`, `AGENTS.md`, `*.mjs`, `templates/*`, `docs/*`, `scripts/*`

**Rule:** When customizing thesis, narrative, stage, target investor types, deal-breakers, proof points, or deck positioning, write to `config/profile.yml`, `modes/_profile.md`, `startup.md`, `founder-bio.md`, `traction-digest.md`, or `market-watch.md`. Do not put founder-specific material in `modes/_shared.md`.

## What Venture-Ops Does

- Scores investor and accelerator fit with structured criteria.
- Generates tailored deck outlines, HTML decks, PDFs, one-pagers, and investor memos.
- Compares existing deck content against the startup front page and recent updates, then flags drift and missing proof.
- Scans a configured investor universe without spending LLM tokens.
- Maintains an inbox and tracker so fundraising is auditable.
- Drafts outreach, warm-intro requests, application answers, and follow-ups.
- Learns from founder corrections after each evaluation and asks targeted questions when important information is stale or missing.
- Monitors relevant news and trends so materials do not lag the market narrative.

## First Run -- Onboarding

Before doing mode work, check whether these exist:

1. `startup.md`
2. `founder-bio.md`
3. `config/profile.yml`
4. `modes/_profile.md`
5. `investors.yml`
6. `data/targets.md` and `data/pipeline.md`

If `modes/_profile.md` is missing, copy from `modes/_profile.template.md` silently. If `config/profile.yml` or `investors.yml` is missing, copy from the matching template and ask the founder to fill the unknowns.

Ask for missing essentials in plain language:
- company name, one-line pitch, website/demo
- sector, stage, traction, raise target, geography
- target investor types and deal-breakers
- existing deck, memo, customer proof, metrics, or screenshots
- startup front-page URL and what changed recently
- accelerator constraints such as relocation, equity, cohort timing, and founder availability

## Mode Routing

| User intent | Mode files |
| --- | --- |
| Investor/accelerator URL or description | `modes/_shared.md` + `modes/auto-pipeline.md` |
| Evaluate one investor/fund/program | `modes/_shared.md` + `modes/evaluate.md` |
| Generate deck or one-pager | `modes/_shared.md` + `modes/deck.md` |
| Application/outreach help | `modes/_shared.md` + `modes/apply.md` |
| Refresh from deck + website + founder updates | `modes/_shared.md` + `modes/refresh.md` |
| News/trend monitoring | `modes/_shared.md` + `modes/news.md` |
| Scan configured targets | `modes/_shared.md` + `modes/scan.md` |
| Process inbox | `modes/_shared.md` + `modes/pipeline.md` |
| Compare targets | `modes/_shared.md` + `modes/compare.md` |
| Accelerator review | `modes/_shared.md` + `modes/accelerator.md` |
| Tracker status | `modes/tracker.md` |
| Deep research | `modes/deep.md` |
| Follow-up cadence | `modes/followup.md` |
| Pattern analysis | `modes/patterns.md` |

## Behavioral Rules

- Be selective. Recommend skipping low-fit targets.
- Never submit applications, send emails, DM investors, or book calls for the user.
- Do not fabricate fund theses, partners, portfolio companies, deadlines, or check sizes. If current facts matter, verify them with browsing.
- Do not fabricate startup news, market shifts, or recent deck claims. When the user asks for recent trends, current news, or today's landscape, browse and cite exact dates.
- Treat accelerator deadlines, program terms, investment amounts, and partner rosters as time-sensitive.
- Make tailored materials specific to the target's thesis, stage, geography, portfolio, likely objections, and current market narrative.
- When materials look stale, ask the founder a short set of high-value questions instead of guessing.
- After feedback, update `modes/_profile.md`, `config/profile.yml`, `startup.md`, `founder-bio.md`, `traction-digest.md`, or `market-watch.md` so the system improves.
