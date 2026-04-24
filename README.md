# Venture-Ops

Venture-Ops is an AI fundraising command center for founders: investor discovery, accelerator targeting, pitch-deck refresh, application drafting, pipeline tracking, and market-aware fundraising ops.

It is a sibling project to `career-ops`, but aimed at startup fundraising instead of job search.

Instead of tracking investor conversations in random docs, rebuilding your deck by hand every month, and spraying applications everywhere, you get a structured fundraising system that:

- **finds targets** that match your stage, geography, and sector
- **scores investor fit** before you waste founder time
- **generates deck/memo/application material** tailored to specific funds and programs
- **refreshes your narrative** from existing decks, website changes, and founder updates
- **tracks outreach and follow-ups** in one auditable pipeline
- **monitors trends and news** so the story stays current instead of drifting stale

> **Important:** Venture-Ops is not an autobot for investor spam. It is a filter and sharpening system. It helps you choose the best targets, tighten the story, and prepare better materials. You still decide what gets sent.

## What Is This

Venture-Ops turns any AI coding CLI into a founder-side fundraising operating system.

It is designed for founders who need to:

- raise a pre-seed, seed, or early institutional round
- apply to accelerators, founder programs, studios, or grants
- maintain an up-to-date pitch deck and memo without constant manual rewrites
- identify which VCs actually fit the company
- ask better “what is missing in this deck?” questions
- keep a structured memory of traction, proof points, and investor objections

The system is agentic: it can inspect your public startup site, compare it to your current deck, identify what is stale, suggest sharper proof, and prepare target-specific material for the next conversation.

## Features

| Feature | Description |
|---------|-------------|
| **Target Scanner** | Match configured VCs, accelerators, angels, and founder programs against your stage, sector, geography, and round |
| **Fit Evaluation** | Score one target with a structured fundraising rubric: thesis, stage, geography, access path, strategic value |
| **Deck Refresh** | Compare deck, website, founder inputs, and current proof to identify stale claims and missing slides |
| **Pitch Deck Generation** | Draft 10-12 slide investor decks, memos, and PDF exports |
| **Founder Questionnaire Loop** | Ask high-value follow-up questions when the story or metrics are incomplete |
| **News / Trend Memory** | Track market shifts, competitor moves, and investor-relevant hooks in `market-watch.md` |
| **Pipeline Tracking** | Keep a single source of truth for targets, statuses, and follow-up timing |
| **Human-in-the-Loop** | Venture-Ops drafts and recommends; founders still send the application, outreach, or deck |

## Example Use Cases

### 1. Refresh a stale deck before investor meetings

You have:
- a PDF deck from 6 weeks ago
- a startup website that has evolved
- a lot of product work shipped since then

Use Venture-Ops to:
- compare the deck against the front page
- flag missing metrics, outdated product scope, and stale screenshots
- ask you targeted questions
- generate an updated 12-slide draft

### 2. Find real-fit investors instead of broad lists

You are a Berlin-based pre-seed founder building developer infrastructure.

Use Venture-Ops to:
- configure your target profile once
- scan a curated investor universe
- rank targets by fit
- identify who should get time this week and who should be skipped

### 3. Apply to accelerators without generic answers

You want to apply to YC, EF, Antler, or another founder program.

Use Venture-Ops to:
- adapt the company story to each program
- generate tighter founder bios and application answers
- highlight where your current deck underexplains the “why now”

### 4. Keep the fundraising narrative current

The market changes fast.

Use Venture-Ops to:
- monitor current trends and adjacent-company news
- update `market-watch.md`
- surface “this should change in the deck now” signals before the next investor call

## Real Example Flow

For QualityMax, Venture-Ops was used to:

- ingest an existing pre-seed deck PDF
- inspect `qualitymax.io`
- inspect the public founder portfolio site
- build a founder bio and startup source-of-truth
- generate a refreshed investor-deck draft
- export the draft as a PDF
- produce a target list of likely-fit VCs and accelerators

Those company-specific artifacts are intentionally not committed to the public repo. The public repository contains the reusable engine, templates, and workflow.

## Quick Start

```bash
# 1. Clone and install
git clone https://github.com/Desperado/venture-ops.git
cd venture-ops && npm install
npx playwright install chromium

# 2. Verify setup
npm run doctor

# 3. Customize
# Edit startup.md, founder-bio.md, config/profile.yml, and investors.yml

# 4. Start using it
# Run in your AI coding agent or use the local scripts below
```

Then customize:

1. Edit `startup.md` with the company source of truth.
2. Edit `founder-bio.md` with founder background and credibility.
3. Edit `traction-digest.md` with metrics, customers, and proof.
4. Edit `market-watch.md` with trends, competitor moves, and timing hooks.
5. Edit `config/profile.yml` for stage, geography, round size, and investor targeting.
6. Edit `investors.yml` to add funds, angels, accelerators, grants, or founder programs you want to track.

## Usage

Venture-Ops can be used in two ways:

### Local commands

```bash
npm run doctor                  # initialize and verify setup
npm run scan -- --dry-run       # preview matching targets
npm run scan                    # append matches to data/pipeline.md
npm run verify                  # validate tracker/report integrity
npm run deck -- deck.html out.pdf
npm run followup                # surface follow-up candidates from tracker
```

### Inside an AI coding agent

```text
/venture-ops                    -> show menu
/venture-ops scan               -> discover matching targets
/venture-ops evaluate {URL}     -> investor/accelerator fit report
/venture-ops deck {target}      -> tailored pitch deck package
/venture-ops refresh            -> audit deck + website + founder updates
/venture-ops news               -> trends/news monitoring and implications
/venture-ops apply {target}     -> application / outreach assistant
/venture-ops pipeline           -> process data/pipeline.md
/venture-ops tracker            -> status overview
/venture-ops followup           -> cadence and draft follow-ups
/venture-ops compare            -> rank multiple targets
/venture-ops deep               -> deep-dive one target
```

Or just paste:
- a VC URL
- an accelerator page
- your current deck
- your startup site

and ask the agent to run the relevant mode.

## Example Prompts

Try prompts like:

```text
Refresh my deck from this PDF and compare it against my website.

Find the top 10 VCs in Europe for a pre-seed developer-tools company.

Evaluate whether YC or EF is the stronger fit for us right now.

Turn this existing fundraising narrative into a tighter 12-slide deck.

Read my startup front page and tell me what an investor would still find unclear.

Update market-watch.md with the last 30 days of relevant category news.
```

## How It Works

```text
Startup profile + founder profile + traction memory
                │
                ▼
Configured investor / accelerator universe
                │
                ▼
Fit evaluation + refresh loop + market context
                │
        ┌───────┼────────┐
        ▼       ▼        ▼
     Report    Deck    Tracker
      .md      .pdf      .md
```

The important point: Venture-Ops is not just “write me a deck.” It is a reusable operating model:

- source of truth files
- mode-based workflows
- investor scanner
- refresh loop
- narrative memory
- tracker discipline

## Core Files

| File | Purpose |
|------|---------|
| `startup.md` | Company source of truth: problem, solution, market, traction, roadmap |
| `founder-bio.md` | Founder narrative, credibility, founder-market fit |
| `traction-digest.md` | Compact proof-point memory for investor materials |
| `market-watch.md` | Current trends, news hooks, competitor signals |
| `config/profile.yml` | Raise profile, round, geography, sectors, ideal target types |
| `investors.yml` | Curated target universe for scanning and fit matching |
| `data/pipeline.md` | Pending targets to process |
| `data/targets.md` | Fundraising tracker |
| `reports/*` | Generated evaluations, deck drafts, and refresh audits |
| `output/*` | Generated slide HTML and PDFs |

## Project Structure

```text
venture-ops/
├── startup.md                 # Company source of truth
├── founder-bio.md             # Founder credibility and narrative
├── traction-digest.md         # Compact proof and metrics memory
├── market-watch.md            # News, trend, and timing memory
├── config/profile.yml         # Raise profile and targeting preferences
├── investors.yml              # Customized target universe
├── modes/                     # Agent workflows
├── templates/
│   ├── deck-template.html
│   ├── investors.example.yml
│   └── states.yml
├── data/
│   ├── pipeline.md            # Inbox of target URLs/names
│   └── targets.md             # Fundraising tracker
├── reports/                   # Fit reports and refresh artifacts
└── output/                    # Generated decks and PDFs
```

## Operating Principle

This is a filter, not a spam machine.

A small number of high-fit, high-context investor conversations beats broad cold outreach. Venture-Ops should make the founder sharper, not noisier.

It should also get better over time:
- every founder correction sharpens the profile
- every new metric improves the deck
- every missed question becomes a future checklist item
- every market change updates the narrative memory

## Disclaimer

**Venture-Ops is a local, open-source workflow — not a hosted fundraising platform.**

By using it, you acknowledge:

1. **You control your data.** Founder details, investor notes, traction, and fundraising materials stay on your machine unless you choose to send them to an AI provider.
2. **You control submissions.** The system drafts and recommends, but it should not submit applications or send outreach on your behalf.
3. **You verify current facts.** Investor partners, deadlines, check sizes, and program terms change frequently; current claims should be checked before use.
4. **No guarantees.** Fit scores are recommendations, not truth. Investors are not deterministic systems. Use judgment.

## License

MIT
