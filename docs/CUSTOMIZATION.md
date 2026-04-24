# Customization Guide

## Profile (`config/profile.yml`)

This is the main control file for your fundraising strategy.

Typical sections include:

- startup name and website
- stage and raise target
- geography
- sector tags
- target investor types
- exclusions and deal-breakers

## Founder Notes (`modes/_profile.md`)

Use this file for the founder-specific heuristics that should shape evaluations:

- narrative angles that resonate
- objections you keep hearing
- what to emphasize for infrastructure, AI, enterprise, or developer-tool investors
- what belongs in the main deck versus appendix

## Startup Source Files

Use these files as your durable memory:

- `startup.md`: product, market, problem, roadmap
- `founder-bio.md`: founder-market fit and credibility
- `traction-digest.md`: metrics, customer proof, launches, and evidence
- `market-watch.md`: timing hooks, news, incidents, competitor movement

## Investor Universe (`investors.yml`)

Copy from `templates/investors.example.yml` and customize:

1. filters for stage, geography, and investor type
2. target entries with URLs and notes
3. thesis details or special constraints you care about

## Templates

- `templates/deck-template.html`: base HTML used for generated deck PDFs
- `templates/investors.example.yml`: starter investor universe
- `templates/states.yml`: canonical workflow states

## Shared Rules

Keep private founder data in user-layer files, not in shared prompts or templates.
