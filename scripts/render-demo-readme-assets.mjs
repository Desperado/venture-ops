#!/usr/bin/env node

import { mkdir } from 'fs/promises';
import { resolve } from 'path';
import { chromium } from 'playwright';

const outDir = process.argv[2] ? resolve(process.argv[2]) : resolve('assets/readme');
const demoPath = resolve('docs/30-sec-demo.html');

const scenes = [
  'demo-step-1-context.png',
  'demo-step-2-profile.png',
  'demo-step-3-scan.png',
  'demo-step-4-refresh.png',
  'demo-step-5-decks.png',
  'demo-step-6-tracker.png',
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1600, height: 1320 },
  deviceScaleFactor: 1.4,
  colorScheme: 'dark',
});

await page.goto(`file://${demoPath}`, { waitUntil: 'load' });
await page.waitForTimeout(500);

for (let i = 0; i < scenes.length; i += 1) {
  await page.evaluate((sceneIndex) => {
    const scenes = Array.from(document.querySelectorAll('.scene'));
    const steps = Array.from(document.querySelectorAll('.step'));
    const progress = document.getElementById('progressBar');
    const sceneTitle = document.getElementById('sceneTitle');
    const sceneTimer = document.getElementById('sceneTimer');
    const controls = document.querySelector('.controls');
    const status = document.getElementById('statusText');

    scenes.forEach((scene, index) => {
      scene.classList.toggle('active', index === sceneIndex);
    });

    steps.forEach((step, index) => {
      step.classList.toggle('active', index === sceneIndex);
      step.classList.toggle('done', index < sceneIndex);
    });

    if (progress) progress.style.width = `${((sceneIndex + 1) / scenes.length) * 100}%`;
    if (sceneTitle) sceneTitle.textContent = scenes[sceneIndex]?.dataset.title || '';
    if (sceneTimer) sceneTimer.textContent = `Scene ${sceneIndex + 1} of ${scenes.length}`;
    if (controls) controls.style.display = 'none';
    if (status) status.textContent = 'README storyboard capture';
  }, i);

  await page.waitForTimeout(150);
  await page.screenshot({
    path: resolve(outDir, scenes[i]),
    type: 'png',
    fullPage: true,
  });
  console.log(`Wrote ${resolve(outDir, scenes[i])}`);
}

await browser.close();
