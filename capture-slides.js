const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  const file = path.resolve('truvo-pitch-deck.html');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('file://' + file, { waitUntil: 'networkidle0' });

  const slides = await page.$$('.slide');
  console.log(`Found ${slides.length} slides`);

  for (let i = 0; i < slides.length; i++) {
    console.log(`Capturing slide ${i + 1}...`);
    const box = await slides[i].boundingBox();
    await page.screenshot({
      path: `slide-${String(i+1).padStart(2, '0')}.png`,
      clip: box
    });
  }

  await browser.close();
  console.log('Done! Slide screenshots saved.');
})();
