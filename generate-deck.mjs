#!/usr/bin/env node

import { chromium } from 'playwright';
import { resolve, dirname, basename } from 'path';
import { readFile, writeFile, unlink } from 'fs/promises';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function normalizeText(html) {
  return html
    .replace(/\u2014/g, '-')
    .replace(/\u2013/g, '-')
    .replace(/[\u201C\u201D\u201E\u201F]/g, '"')
    .replace(/[\u2018\u2019\u201A\u201B]/g, "'")
    .replace(/\u2026/g, '...')
    .replace(/[\u200B\u200C\u200D\u2060\uFEFF]/g, '')
    .replace(/\u00A0/g, ' ');
}

async function main() {
  const [inputArg, outputArg] = process.argv.slice(2);
  if (!inputArg || !outputArg) {
    console.error('Usage: node generate-deck.mjs <input.html> <output.pdf>');
    process.exit(1);
  }

  const inputPath = resolve(inputArg);
  const outputPath = resolve(outputArg);
  const inputDir = dirname(inputPath);
  const fontsDir = resolve(__dirname, 'fonts');

  let html = normalizeText(await readFile(inputPath, 'utf8'));
  html = html.replace(/url\(['"]?\.\/fonts\//g, `url('file://${fontsDir}/`);
  html = html.replace(/file:\/\/([^'")]+)\.(woff2?|ttf|otf)['"]?\)/g, `file://$1.$2')`);
  // Rewrite relative src="./..." and src="../..." paths to absolute file:// URLs so
  // images resolve under setContent (Playwright's baseURL only applies to goto/route).
  html = html.replace(/(\s(?:src|href))=(['"])(\.{1,2}\/[^'"]+)\2/g, (_m, attr, q, path) => {
    const absolute = resolve(inputDir, path);
    return `${attr}=${q}file://${absolute}${q}`;
  });

  // Write the rewritten HTML to a sibling temp file and navigate via file:// so the page
  // gets a file:// origin (Chromium blocks file:// subresources when the page origin is null).
  const tempPath = resolve(inputDir, `.${basename(inputPath, '.html')}.rendered.html`);
  await writeFile(tempPath, html);

  // Read slide dimensions from the @page rule so this script works for any deck size.
  const pageRule = html.match(/@page\s*\{[^}]*size:\s*([0-9.]+in)\s+([0-9.]+in)/i);
  const pageWidth = pageRule ? pageRule[1] : '11in';
  const pageHeight = pageRule ? pageRule[2] : '6.1875in';

  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
    await page.goto(pathToFileURL(tempPath).href, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const broken = await page.evaluate(() =>
      [...document.images].filter(i => !i.complete || i.naturalWidth === 0).map(i => i.currentSrc || i.src)
    );
    if (broken.length) {
      console.warn(`Warning: ${broken.length} image(s) failed to load:`);
      for (const src of broken) console.warn(`  ${src}`);
    }
    const pdf = await page.pdf({
      width: pageWidth,
      height: pageHeight,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    await writeFile(outputPath, pdf);
    console.log(`Deck PDF generated: ${outputPath}`);
    console.log(`Size: ${(pdf.length / 1024).toFixed(1)} KB`);
  } finally {
    await browser.close();
    try { await unlink(tempPath); } catch {}
  }
}

main().catch((error) => {
  console.error(`Deck generation failed: ${error.message}`);
  process.exit(1);
});
