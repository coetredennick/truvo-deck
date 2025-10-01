const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('🚀 Starting PDF conversion...');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Set viewport to match standard presentation dimensions
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 2
  });

  const htmlPath = path.join(__dirname, 'truvo-pitch-deck.html');
  console.log(`📄 Loading: ${htmlPath}`);

  await page.goto('file://' + htmlPath, {
    waitUntil: 'networkidle0',
    timeout: 30000
  });

  // Wait for images and animations to load
  console.log('⏳ Waiting for content to load...');
  await new Promise(resolve => setTimeout(resolve, 3000));

  console.log('📝 Generating PDF...');
  await page.pdf({
    path: 'truvo-deck.pdf',
    width: '1920px',
    height: '1080px',
    printBackground: true,
    preferCSSPageSize: false,
    displayHeaderFooter: false,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });

  await browser.close();

  console.log('✅ PDF created successfully: truvo-deck.pdf');
  console.log('📊 Size: 1920x1080 (16:9 ratio)');
})();
