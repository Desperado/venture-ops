# Venture-Ops

Venture-Ops is a fundraising command center forked from the Career-Ops operating model: structured evaluation, reusable source-of-truth files, scanner-driven discovery, generated artifacts, tracker discipline, and human-in-the-loop application support.

It is for founders who need to:

- find relevant VCs, angels, scouts, grants, studios, and accelerators
- score investor fit before spending scarce founder time
- generate tailored pitch decks, investor memos, and application answers
- track outreach, follow-ups, warm intros, rejections, and next steps
- learn from responses and continuously sharpen the fundraising narrative
- auto-tune materials from existing decks, front-page signals, founder updates, and market news

> Venture-Ops does not submit accelerator or investor applications for you. It prepares materials, drafts answers, tracks state, and gives recommendations. You decide what to send.

## Quick Start

```bash
npm install
npx playwright install chromium
npm run doctor
```

Then customize:

1. Edit `startup.md` with the company source of truth.
2. Edit `founder-bio.md` with founder background and credibility.
3. Edit `config/profile.yml` for stage, geography, sectors, raise target, and constraints.
4. Edit `investors.yml` to add funds, accelerators, angels, grants, or scout programs.
5. Use `market-watch.md` as the running memory for news, trend shifts, competitor movement, and investor-relevant timing.

## Commands

```bash
npm run scan -- --dry-run      # preview matching investors/accelerators
npm run scan                   # append matches to data/pipeline.md
npm run verify                 # validate tracker integrity
npm run deck -- deck.html out.pdf
```

Inside an AI coding agent:

```text
/venture-ops                    -> menu
/venture-ops scan               -> discover matching targets
/venture-ops evaluate {URL}     -> investor/accelerator fit report
/venture-ops deck {target}      -> tailored pitch deck package
/venture-ops refresh            -> audit deck + website + founder updates
/venture-ops news               -> trends/news monitoring and implications
/venture-ops apply {target}     -> application/outreach assistant
/venture-ops pipeline           -> process data/pipeline.md
/venture-ops tracker            -> status overview
/venture-ops followup           -> cadence and draft follow-ups
```

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
├── templates/deck-template.html
├── data/pipeline.md           # Inbox of target URLs/names
├── data/targets.md            # Fundraising tracker
├── reports/                   # Fit reports
└── output/                    # Generated decks and PDFs
```

## Operating Principle

This is a filter, not a spam machine. A small number of high-fit, high-context investor conversations beats broad cold outreach. The system should make the founder sharper, not noisier.
