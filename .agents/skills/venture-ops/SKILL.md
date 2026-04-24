---
name: venture-ops
description: AI fundraising command center -- evaluate investors, generate pitch decks, scan targets, track outreach and applications
user_invocable: true
args: mode
argument-hint: "[scan | evaluate | deck | apply | batch | tracker | pipeline | deep | accelerator | compare | followup | patterns]"
---

# venture-ops -- Router

Load `modes/_shared.md` plus the selected mode file. If the argument looks like an investor, accelerator, grant, or fund URL/description, use `modes/auto-pipeline.md`.

Never submit applications or send outreach for the founder.
