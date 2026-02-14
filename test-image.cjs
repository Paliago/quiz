const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  
  const dir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  // Open quiz and capture question with image
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(1000);
  await page.click('text=Dog Breeds');
  await page.waitForTimeout(1000);
  await page.click('text=Start Quiz');
  await page.waitForTimeout(3000); // Wait for image to load
  
  await page.screenshot({ path: path.join(dir, 'quiz-with-image.png') });
  console.log('✅ Screenshot saved: quiz-with-image.png');
  
  // Check if image loaded
  const imgLoaded = await page.evaluate(() => {
    const img = document.querySelector('img');
    return img && img.complete && img.naturalHeight > 0;
  });
  console.log(`Image loaded: ${imgLoaded}`);
  
  await browser.close();
})();
