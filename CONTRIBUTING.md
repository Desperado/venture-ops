# Contributing to Venture-Ops

Thanks for your interest in contributing.

Venture-Ops is a local open-source workflow for founder-side fundraising. Good contributions make the system clearer, safer, and more useful to real founders running real fundraising processes.

## Before Submitting a PR

Please open an issue first for larger changes so we can align on direction before you spend time implementing.

### What makes a good PR

- fixes a real bug or ambiguity in the current workflow
- improves documentation or setup clarity
- adds a useful mode, template, or script without duplicating existing logic
- keeps founder data out of tracked files
- follows the existing project philosophy: simple, local-first, quality over quantity

## Quick Start

1. Open or comment on an issue
2. Fork the repo
3. Create a branch
4. Make the change
5. Run the local checks
6. Open a PR with a clear explanation of what changed and why

## Good Contribution Areas

- improve investor and accelerator workflows
- improve deck generation, refresh, or report clarity
- tighten documentation and onboarding
- add generic example materials that do not expose founder data
- improve scripts used by `doctor`, `scan`, `verify`, or deck export

## Guidelines

- keep founder-specific data in user-layer files, never in checked-in shared prompts
- prefer reusable templates and modes over one-off logic
- avoid hidden automation that acts on behalf of the founder
- do not commit private startup information, investor notes, decks, or generated outputs

## What We Do Not Accept

- PRs that auto-submit applications or send outreach without human review
- PRs that add investor spam workflows
- PRs containing private founder or company data
- PRs that depend on proprietary hosted infrastructure without prior discussion

## Development

```bash
npm install
npx playwright install chromium
npm run doctor
npm run verify
npm run scan -- --dry-run
```

## Need Help?

- [Open an issue](https://github.com/Desperado/venture-ops/issues)
- [Read the setup guide](docs/SETUP.md)
- [Read the architecture notes](docs/ARCHITECTURE.md)
