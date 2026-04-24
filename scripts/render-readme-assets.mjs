import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const outputDir = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve("assets/readme");

const remoteTargets = [
  { file: "crane-home.jpg", label: "Crane Venture Partners", url: "https://crane.vc/" },
  { file: "point-nine-home.jpg", label: "Point Nine", url: "https://www.pointnine.com/" },
  { file: "seedcamp-home.jpg", label: "Seedcamp", url: "https://seedcamp.com/" },
  { file: "frontline-home.jpg", label: "Frontline Seed", url: "https://frontline.vc/frontline-seed/" },
  { file: "playfair-home.jpg", label: "Playfair", url: "https://playfair.vc/" },
  { file: "episode1-home.jpg", label: "Episode 1", url: "https://www.episode1.com/" }
];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderCard({ eyebrow, title, subtitle, columns, footer }) {
  const columnHtml = columns
    .map((column) => {
      const items = column.items
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join("");
      return `
        <section class="panel">
          <div class="panel-title">${escapeHtml(column.title)}</div>
          <ul>${items}</ul>
        </section>
      `;
    })
    .join("");

  return `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <style>
        :root {
          color-scheme: light;
          --bg: #f3f5f8;
          --text: #102031;
          --muted: #4b5d72;
          --panel: #ffffff;
          --line: #d8e1ec;
          --accent: #1660cf;
          --accent-soft: #e8f0ff;
          --shadow: 0 18px 48px rgba(16, 32, 49, 0.12);
        }

        * { box-sizing: border-box; }

        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background:
            radial-gradient(circle at top left, rgba(22, 96, 207, 0.12), transparent 28%),
            linear-gradient(180deg, #f8fbff 0%, var(--bg) 100%);
          color: var(--text);
        }

        .frame {
          width: 1600px;
          min-height: 900px;
          padding: 56px;
          display: flex;
          flex-direction: column;
          gap: 26px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          width: fit-content;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(22, 96, 207, 0.12);
          color: var(--accent);
          font-size: 20px;
          font-weight: 700;
        }

        h1 {
          margin: 0;
          font-size: 58px;
          line-height: 1.02;
          letter-spacing: 0;
          max-width: 1100px;
        }

        .subtitle {
          margin: 0;
          font-size: 28px;
          line-height: 1.35;
          color: var(--muted);
          max-width: 1180px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(${columns.length}, minmax(0, 1fr));
          gap: 22px;
          margin-top: 12px;
        }

        .panel {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 8px;
          padding: 24px 24px 20px;
          box-shadow: var(--shadow);
          min-height: 0;
        }

        .panel-title {
          font-size: 26px;
          font-weight: 800;
          color: var(--text);
          margin-bottom: 14px;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 12px;
        }

        li {
          padding: 12px 14px;
          background: #f9fbfd;
          border: 1px solid #e6edf5;
          border-radius: 8px;
          font-size: 20px;
          line-height: 1.35;
          color: #193049;
        }

        .footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          font-size: 18px;
          color: var(--muted);
        }

        .footer strong {
          color: var(--accent);
        }
      </style>
    </head>
    <body>
      <main class="frame">
        <div class="eyebrow">${escapeHtml(eyebrow)}</div>
        <h1>${escapeHtml(title)}</h1>
        <p class="subtitle">${escapeHtml(subtitle)}</p>
        <div class="grid">${columnHtml}</div>
        <div class="footer">${footer.map((item) => `<span>${item}</span>`).join("")}</div>
      </main>
    </body>
  </html>`;
}

async function renderGraphic(page, name, card) {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.setContent(renderCard(card), { waitUntil: "load" });
  await page.screenshot({
    path: path.join(outputDir, name),
    type: "png"
  });
}

async function renderRemote(page, target) {
  await page.setViewportSize({ width: 1440, height: 980 });
  await page.goto(target.url, { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.waitForTimeout(2500);
  await page.addStyleTag({
    content: `
      [id*="cookie"], [class*="cookie"], [aria-label*="cookie"], [data-testid*="cookie"],
      [id*="consent"], [class*="consent"], [aria-label*="consent"],
      [data-test*="cookie"], [role="dialog"][aria-modal="true"] {
        display: none !important;
        visibility: hidden !important;
      }
      html, body {
        scroll-behavior: auto !important;
      }
    `
  }).catch(() => {});
  await page.screenshot({
    path: path.join(outputDir, target.file),
    type: "jpeg",
    quality: 84
  });
}

await fs.mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  deviceScaleFactor: 1.5,
  colorScheme: "light"
});

await renderGraphic(page, "venture-ops-overview.png", {
  eyebrow: "Founder Workflow",
  title: "Turn a deck, website, and founder notes into a fundraising operating system.",
  subtitle:
    "Venture-Ops reads what you already have, finds what is stale or missing, asks the right follow-up questions, and returns a shortlist plus fresh materials.",
  columns: [
    {
      title: "What you feed in",
      items: [
        "Current pitch deck",
        "Website front page",
        "Founder background",
        "Traction and proof notes"
      ]
    },
    {
      title: "What Venture-Ops does",
      items: [
        "Compares deck vs website",
        "Flags drift and missing proof",
        "Searches current-fit investors",
        "Tracks market and timing hooks"
      ]
    },
    {
      title: "What comes out",
      items: [
        "Deck refresh audit",
        "Ranked VC shortlist",
        "Founder follow-up questions",
        "Outreach and application drafts"
      ]
    }
  ],
  footer: [
    "<strong>Plain-English outcome:</strong> less guesswork, fewer wasted investor conversations.",
    "Public README visual generated by scripts/render-readme-assets.mjs"
  ]
});

await renderGraphic(page, "deck-intake-sanitized.png", {
  eyebrow: "Sanitized Real Example",
  title: "A real deck can be turned into a safer, sharper fundraising brief without exposing private details.",
  subtitle:
    "This graphic is based on a real pre-seed AI testing company. Sensitive numbers and names are masked, but the workflow is the same one founders actually need.",
  columns: [
    {
      title: "Input signals",
      items: [
        "Round: [PRE-SEED ROUND]",
        "Category: AI testing / verification",
        "Public site: pricing and integrations are live",
        "Founder credibility: long QA and automation background"
      ]
    },
    {
      title: "What the system noticed",
      items: [
        "Website story had evolved beyond the old deck",
        "Public claims and version counts needed reconciliation",
        "Commercial status needed a founder-safe investor framing",
        "Some proof was stronger on the site than in the slides"
      ]
    },
    {
      title: "What Venture-Ops asked for",
      items: [
        "Which metrics are investor-safe right now?",
        "Which customer names can be referenced publicly?",
        "Which numbers are canonical and current?",
        "Which claims belong in the main deck vs appendix?"
      ]
    }
  ],
  footer: [
    "<strong>Result:</strong> refreshed deck draft, shortlist of current-fit firms, and a cleaner diligence checklist.",
    "Company-specific data intentionally obfuscated."
  ]
});

await renderGraphic(page, "live-vc-summary.png", {
  eyebrow: "Live VC Search Snapshot",
  title: "Current shortlist for a European pre-seed AI infrastructure company.",
  subtitle:
    "Pulled from official firm websites on April 24, 2026 and summarized in a way a founder can use immediately.",
  columns: [
    {
      title: "Top current-fit firms",
      items: [
        "Crane Venture Partners - deep infra, developer tools, AI",
        "Point Nine - software-first and AI-native",
        "Seedcamp - Europe-focused early-stage software",
        "Frontline Seed - European B2B software, pre-seed to seed",
        "Playfair - pre-seed specialist in the UK and Europe",
        "Episode 1 - B2B software at pre-seed and seed"
      ]
    },
    {
      title: "Why they matched",
      items: [
        "Developer-tools and infrastructure overlap",
        "Comfort with technical founders and AI software",
        "Stage fit for pre-seed or early seed",
        "Strong Europe angle",
        "Clear application or intro path",
        "Useful support for a US expansion story"
      ]
    },
    {
      title: "What the founder does next",
      items: [
        "Tighten the deck and reconcile live numbers",
        "Prepare one short angle per target",
        "Send the top three first, not all six at once",
        "Use the tracker to log replies and follow-ups"
      ]
    }
  ],
  footer: [
    "<strong>Date:</strong> April 24, 2026",
    "Targets should always be re-checked before a live send."
  ]
});

for (const target of remoteTargets) {
  console.log(`Capturing ${target.label}`);
  await renderRemote(page, target);
}

await browser.close();
console.log(`Wrote README assets to ${outputDir}`);
