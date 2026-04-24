# Pipeline Mode

Process unchecked entries in `data/pipeline.md`.

For each pending target:
1. Verify current facts if needed.
2. Evaluate fit.
3. Write a report in `reports/`.
4. Provide a tracker-ready row for `data/targets.md`.
5. Move processed entries under `## Processed` only after the user accepts the result.

Batch only when targets are independent.
