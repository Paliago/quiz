const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  
  const dir = path.join(__dirname, 'screenshots');
  
  // Go to World Wonders and play through to results
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(1000);
  await page.click('text=World Wonders');
  await page.waitForTimeout(1000);
  await page.click('text=Start Quiz');
  await page.waitForTimeout(1500);
  
  // Answer all 8 questions
  for (let i = 0; i < 8; i++) {
    const options = await page.locator('button[class*="option"]').all();
    if (options.length > 0) {
      await options[0].click();
      await page.waitForTimeout(800);
    }
    const next = page.locator('text=Next').first();
    if (await next.isVisible().catch(() => false)) {
      await next.click();
      await page.waitForTimeout(800);
    } else {
      await page.waitForTimeout(1500);
    }
  }
  
  // Wait for results and screenshot
  await page.waitForTimeout(2000);
  await page.screenshot({ path: path.join(dir, 'results-final.png') });
  console.log('✅ Results screen captured!');
  
  await browser.close();
})();
