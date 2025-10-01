const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Get client name from command line argument
const clientName = process.argv[2];

if (!clientName) {
  console.error('❌ Error: Please provide a client name');
  console.log('Usage: node convert-client-deck.js <client-name>');
  console.log('Example: node convert-client-deck.js rowe-environmental');
  process.exit(1);
}

(async () => {
  const clientDir = path.join(__dirname, 'clients', clientName);
  const htmlPath = path.join(clientDir, `${clientName}-deck.html`);
  const outputPath = path.join(clientDir, `${clientName}-deck.pdf`);

  // Check if HTML file exists
  if (!fs.existsSync(htmlPath)) {
    console.error(`❌ Error: Deck not found at ${htmlPath}`);
    process.exit(1);
  }

  console.log(`🚀 Converting deck for: ${clientName}`);
  console.log(`📄 Source: ${htmlPath}`);

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

  await page.goto('file://' + htmlPath, {
    waitUntil: 'networkidle0',
    timeout: 30000
  });

  // Wait for images and animations to load
  console.log('⏳ Waiting for content to load...');
  await new Promise(resolve => setTimeout(resolve, 3000));

  console.log('📝 Generating PDF...');
  await page.pdf({
    path: outputPath,
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

  // Get file size
  const stats = fs.statSync(outputPath);
  const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(1);

  console.log(`✅ PDF created successfully!`);
  console.log(`📊 Output: ${outputPath}`);
  console.log(`📦 Size: ${fileSizeMB} MB (1920x1080, 16:9 ratio)`);
})();
