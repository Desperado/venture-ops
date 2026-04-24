#!/usr/bin/env node

import { chromium } from 'playwright';
import { resolve, dirname } from 'path';
import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';

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
  const fontsDir = resolve(__dirname, 'fonts');

  let html = normalizeText(await readFile(inputPath, 'utf8'));
  html = html.replace(/url\(['"]?\.\/fonts\//g, `url('file://${fontsDir}/`);
  html = html.replace(/file:\/\/([^'")]+)\.(woff2?|ttf|otf)['"]?\)/g, `file://$1.$2')`);

  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
    await page.setContent(html, {
      waitUntil: 'networkidle',
      baseURL: `file://${dirname(inputPath)}/`,
    });
    await page.evaluate(() => document.fonts.ready);
    const pdf = await page.pdf({
      width: '11in',
      height: '6.1875in',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    await writeFile(outputPath, pdf);
    console.log(`Deck PDF generated: ${outputPath}`);
    console.log(`Size: ${(pdf.length / 1024).toFixed(1)} KB`);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(`Deck generation failed: ${error.message}`);
  process.exit(1);
});
