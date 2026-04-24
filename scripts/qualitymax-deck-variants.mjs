#!/usr/bin/env node

import { mkdir, readFile, writeFile } from 'fs/promises';
import { dirname, resolve } from 'path';

const [, , inputArg, outputDirArg] = process.argv;

if (!inputArg || !outputDirArg) {
  console.error('Usage: node scripts/qualitymax-deck-variants.mjs <base.html> <output-dir>');
  process.exit(1);
}

const inputPath = resolve(inputArg);
const outputDir = resolve(outputDirArg);

function applyReplacements(html, replacements) {
  let next = html;
  for (const [from, to] of replacements) {
    if (!next.includes(from)) {
      throw new Error(`Expected snippet not found:\n${from}`);
    }
    next = next.replace(from, to);
  }
  return next;
}

const shared = [
  [
    '<title>QualityMax Deck Draft V3</title>',
    '<title>QualityMax Deck - Master</title>',
  ],
  [
    '<div class="kicker">QualityMax / Pre-Seed / April 2026</div>',
    '<div class="kicker">QualityMax / Master Deck / April 2026</div>',
  ],
  [
    '<div class="footer"><span>QualityMax / Draft investor deck v3</span><span>12</span></div>',
    '<div class="footer"><span>QualityMax / Master investor deck</span><span>12</span></div>',
  ],
];

const variants = [
  {
    slug: 'master',
    replacements: shared,
  },
  {
    slug: 'crane',
    replacements: [
      ...shared,
      ['<title>QualityMax Deck - Master</title>', '<title>QualityMax Deck - Crane Variant</title>'],
      ['<div class="kicker">QualityMax / Master Deck / April 2026</div>', '<div class="kicker">QualityMax / Crane Variant / April 2026</div>'],
      [
        'When every developer ships ten times faster with Claude Code, Cursor, and modern AI tooling, someone has to catch what breaks and what leaks. QualityMax does it inside the workflows teams already use.',
        'AI-speed shipping created a new infrastructure problem: code generation accelerated, but verification did not. QualityMax is the developer-native verification layer that sits inside the workflows teams already use.',
      ],
      [
        '<h2>AI accelerated software creation. It did not accelerate verification.</h2>',
        '<h2>AI turned software creation into a verification infrastructure problem.</h2>',
      ],
      [
        '<div class="quote">The bottleneck of the AI era is no longer code generation. It is verification.</div>',
        '<div class="quote">The next infrastructure layer in AI-built software is not generation. It is verification.</div>',
      ],
      [
        '<li>AI coding tools compress build time for every founder and engineering team.</li>',
        '<li>AI coding tools compressed software creation into an infrastructure-speed workflow.</li>',
      ],
      [
        '<li>They do not generate trustworthy test coverage, merge gates, or security validation.</li>',
        '<li>They did not create a trustworthy verification layer for merge gates, security checks, or release confidence.</li>',
      ],
      [
        '<h3>Shift in buyer psychology</h3>',
        '<h3>Infrastructure demand shift</h3>',
      ],
      [
        'Teams now ship faster than their verification layer can keep up, so release confidence becomes an executive and founder problem.',
        'Teams now ship faster than their verification layer can keep up, which turns release confidence into an infrastructure buying problem.',
      ],
      [
        '<h3>Current differentiation signals</h3>',
        '<h3>Current infrastructure signals</h3>',
      ],
      [
        '<h2>Why QualityMax is hard to copy.</h2>',
        '<h2>Why this can become foundational verification infrastructure.</h2>',
      ],
      [
        '<div class="card"><h3>Auditable verification layer</h3><p class="small">The long-term moat is not only generating tests, but making them inspectable, reusable, and compliance-friendly.</p></div>',
        '<div class="card"><h3>Auditable verification layer</h3><p class="small">The moat is not only generation. It is building an inspectable, reusable, compliance-friendly trust layer for software shipped with AI.</p></div>',
      ],
      [
        '<div class="card"><h3>Open-source wedge</h3><p class="small">qmax-code creates trust, usage, and pull from the same technical audience likely to adopt the full platform.</p></div>',
        '<div class="card"><h3>Open-source wedge</h3><p class="small">qmax-code creates trust, usage, and pull from the same technical audience likely to adopt foundational developer infrastructure.</p></div>',
      ],
      [
        '<div class="footer"><span>Moat = domain depth + distribution + compounding product loops</span><span>06</span></div>',
        '<div class="footer"><span>Moat = auditable trust layer + technical distribution + compounding loops</span><span>06</span></div>',
      ],
      [
        '<h2>Three lanes, one funnel.</h2>',
        '<h2>Three routes into a developer-infrastructure wedge.</h2>',
      ],
      [
        '<h3>Bottom-up product-led</h3>',
        '<h3>Bottom-up technical adoption</h3>',
      ],
      [
        '<h3>Audit-led adoption</h3>',
        '<h3>Open-source to platform</h3>',
      ],
      [
        'Free QA audits and hands-on build-with engagements open the door, then expand into recurring platform usage.',
        'qmax-code and workflow-native entry points create trust with developers first, then expand into recurring platform usage and paid infrastructure spend.',
      ],
      [
        '<h3>Compliance-led enterprise</h3>',
        '<h3>Compliance-led infrastructure pull</h3>',
      ],
      [
        '<h2>AI creates code. Legacy QA still assumes manual verification.</h2>',
        '<h2>Developer tooling creates code. The missing layer is verification infrastructure.</h2>',
      ],
      [
        '<div class="footer"><span>Category position: verification infrastructure for AI-generated software</span><span>11</span></div>',
        '<div class="footer"><span>Category position: verification infrastructure for AI-generated software</span><span>11</span></div>',
      ],
      [
        '<h2>EUR 500K to turn strong product proof into repeatable commercial proof.</h2>',
        '<h2>EUR 500K to turn verification-infrastructure pull into repeatable commercial proof.</h2>',
      ],
      [
        '<div class="footer"><span>QualityMax / Master investor deck</span><span>12</span></div>',
        '<div class="footer"><span>QualityMax / Crane investor variant</span><span>12</span></div>',
      ],
    ],
  },
  {
    slug: 'episode1',
    replacements: [
      ...shared,
      ['<title>QualityMax Deck - Master</title>', '<title>QualityMax Deck - Episode 1 Variant</title>'],
      ['<div class="kicker">QualityMax / Master Deck / April 2026</div>', '<div class="kicker">QualityMax / Episode 1 Variant / April 2026</div>'],
      [
        'When every developer ships ten times faster with Claude Code, Cursor, and modern AI tooling, someone has to catch what breaks and what leaks. QualityMax does it inside the workflows teams already use.',
        'Software teams now ship faster than QA can keep up. QualityMax gives them one developer-native system to generate tests, gate releases, and catch failures before customers do.',
      ],
      [
        '<h2>AI accelerated software creation. It did not accelerate verification.</h2>',
        '<h2>Software teams can now ship faster than their quality layer can keep up.</h2>',
      ],
      [
        '<div class="quote">The bottleneck of the AI era is no longer code generation. It is verification.</div>',
        '<div class="quote">For AI-native software teams, the bottleneck is no longer writing code. It is trusting what ships.</div>',
      ],
      [
        '<h3>Shift in buyer psychology</h3>',
        '<h3>Why buyers care</h3>',
      ],
      [
        'Teams now ship faster than their verification layer can keep up, so release confidence becomes an executive and founder problem.',
        'Release confidence is becoming a founder and engineering problem because teams can now create software faster than they can verify it.',
      ],
      [
        '<h2>This is already a product, not a concept slide.</h2>',
        '<h2>This is already a live product, not a concept.</h2>',
      ],
      [
        '<h2>Why QualityMax is hard to copy.</h2>',
        '<h2>Why QualityMax has an early edge.</h2>',
      ],
      [
        '<div class="card"><h3>Developer-native distribution</h3><p class="small">Lives in repo, CI, terminal, and developer tooling instead of asking teams to adopt a separate QA process.</p></div>',
        '<div class="card"><h3>Workflow fit</h3><p class="small">Lives in repo, CI, terminal, and developer tooling instead of asking teams to adopt a separate QA process.</p></div>',
      ],
      [
        '<div class="card"><h3>Self-improving loop</h3><p class="small">Failures, repairs, and review cycles can compound into a sharper product over time.</p></div>',
        '<div class="card"><h3>Fast product iteration</h3><p class="small">Failures, repairs, and review cycles can compound into a sharper product over time.</p></div>',
      ],
      [
        '<div class="card"><h3>Open-source wedge</h3><p class="small">qmax-code creates trust, usage, and pull from the same technical audience likely to adopt the full platform.</p></div>',
        '<div class="card"><h3>Early distribution wedge</h3><p class="small">qmax-code creates trust, usage, and pull from the same technical audience likely to adopt the full platform.</p></div>',
      ],
      [
        '<h2>Three lanes, one funnel.</h2>',
        '<h2>Three lanes to early revenue.</h2>',
      ],
      [
        '<h2>AI creates code. Legacy QA still assumes manual verification.</h2>',
        '<h2>A new software workflow needs a new quality layer.</h2>',
      ],
      [
        '<div class="footer"><span>Category position: verification infrastructure for AI-generated software</span><span>11</span></div>',
        '<div class="footer"><span>Category position: AI-native software quality for modern teams</span><span>11</span></div>',
      ],
      [
        '<h2>EUR 500K to turn strong product proof into repeatable commercial proof.</h2>',
        '<h2>EUR 500K to turn product pull into repeatable commercial proof.</h2>',
      ],
      [
        '<div class="footer"><span>QualityMax / Master investor deck</span><span>12</span></div>',
        '<div class="footer"><span>QualityMax / Episode 1 investor variant</span><span>12</span></div>',
      ],
    ],
  },
  {
    slug: 'pointnine',
    replacements: [
      ...shared,
      ['<title>QualityMax Deck - Master</title>', '<title>QualityMax Deck - Point Nine Variant</title>'],
      ['<div class="kicker">QualityMax / Master Deck / April 2026</div>', '<div class="kicker">QualityMax / Point Nine Variant / April 2026</div>'],
      [
        'When every developer ships ten times faster with Claude Code, Cursor, and modern AI tooling, someone has to catch what breaks and what leaks. QualityMax does it inside the workflows teams already use.',
        'Software built with AI still needs software-grade verification. QualityMax is the AI-native platform that helps teams generate tests, gate releases, and keep quality moving at the speed of modern shipping.',
      ],
      [
        '<h2>AI accelerated software creation. It did not accelerate verification.</h2>',
        '<h2>AI created a new software stack. Verification did not keep up.</h2>',
      ],
      [
        '<div class="quote">The bottleneck of the AI era is no longer code generation. It is verification.</div>',
        '<div class="quote">The next big software category in the AI stack is verification.</div>',
      ],
      [
        '<h3>Shift in buyer psychology</h3>',
        '<h3>Software buyer shift</h3>',
      ],
      [
        'Teams now ship faster than their verification layer can keep up, so release confidence becomes an executive and founder problem.',
        'Teams adopting AI-speed software creation still need confidence, quality gates, and auditability before they can trust what ships.',
      ],
      [
        '<h2>This is already a product, not a concept slide.</h2>',
        '<h2>This is already live software, not a services thesis.</h2>',
      ],
      [
        '<h2>Why QualityMax is hard to copy.</h2>',
        '<h2>Why QualityMax can become a category platform.</h2>',
      ],
      [
        '<div class="card"><h3>Developer-native distribution</h3><p class="small">Lives in repo, CI, terminal, and developer tooling instead of asking teams to adopt a separate QA process.</p></div>',
        '<div class="card"><h3>Software-native distribution</h3><p class="small">Lives in repo, CI, terminal, and developer tooling instead of asking teams to adopt a separate QA process.</p></div>',
      ],
      [
        '<div class="card"><h3>Auditable verification layer</h3><p class="small">The long-term moat is not only generating tests, but making them inspectable, reusable, and compliance-friendly.</p></div>',
        '<div class="card"><h3>Platform control layer</h3><p class="small">The moat is not only generating tests, but becoming the inspectable, reusable control layer for AI-built software quality.</p></div>',
      ],
      [
        '<h2>Three lanes, one funnel.</h2>',
        '<h2>Product-led wedge with expansion into platform spend.</h2>',
      ],
      [
        '<h3>Bottom-up product-led</h3>',
        '<h3>Bottom-up product-led adoption</h3>',
      ],
      [
        '<h3>Audit-led adoption</h3>',
        '<h3>Hands-on onboarding and expansion</h3>',
      ],
      [
        '<h3>Compliance-led enterprise</h3>',
        '<h3>Enterprise and regulated expansion</h3>',
      ],
      [
        '<h2>AI creates code. Legacy QA still assumes manual verification.</h2>',
        '<h2>Software built on AI still needs software-grade verification.</h2>',
      ],
      [
        '<div class="footer"><span>Category position: verification infrastructure for AI-generated software</span><span>11</span></div>',
        '<div class="footer"><span>Category position: AI-native verification platform for software teams</span><span>11</span></div>',
      ],
      [
        '<h2>EUR 500K to turn strong product proof into repeatable commercial proof.</h2>',
        '<h2>EUR 500K to turn product-led pull into a repeatable AI-software platform motion.</h2>',
      ],
      [
        '<div class="footer"><span>QualityMax / Master investor deck</span><span>12</span></div>',
        '<div class="footer"><span>QualityMax / Point Nine investor variant</span><span>12</span></div>',
      ],
    ],
  },
];

const baseHtml = await readFile(inputPath, 'utf8');

await mkdir(outputDir, { recursive: true });

for (const variant of variants) {
  const html = applyReplacements(baseHtml, variant.replacements);
  const outputPath = resolve(outputDir, `qualitymax-deck-${variant.slug}-2026-04-24.html`);
  await writeFile(outputPath, html, 'utf8');
  console.log(`Wrote ${outputPath}`);
}

