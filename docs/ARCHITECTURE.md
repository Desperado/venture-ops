# Architecture

## System Overview

```text
Founder files + startup files + investor universe
                     │
                     ▼
         Modes and scripts interpret the context
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
     Reports       Decks        Tracker
      .md       .html/.pdf        .md
```

## Core Inputs

- `startup.md`: company source of truth
- `founder-bio.md`: founder credibility and background
- `traction-digest.md`: metrics, proof, and customer notes
- `market-watch.md`: recent market shifts and timing hooks
- `config/profile.yml`: raise profile and target filters
- `investors.yml`: investor and accelerator universe

## Core Outputs

- target fit reports in `reports/`
- generated slide HTML and PDFs in `output/`
- fundraising tracker entries in `data/targets.md`
- scanner inbox items in `data/pipeline.md`

## Main Workflows

### 1. Scan

`scan-investors.mjs` matches configured targets against the startup profile and stage filters, then writes suggested items into the fundraising workflow.

### 2. Evaluate

Agent modes turn a target URL or description into a structured fit assessment: thesis, stage, geography, likely objections, and best next action.

### 3. Refresh

The refresh loop compares:

- deck
- startup website
- founder notes
- traction notes
- current market context

This is how Venture-Ops spots stale claims and missing proof before a founder sends materials.

### 4. Generate Deck

`generate-deck.mjs` renders a deck HTML file into PDF using Playwright.

### 5. Track

`verify-pipeline.mjs` checks tracker consistency, report links, and status formatting so the fundraising process stays readable.
