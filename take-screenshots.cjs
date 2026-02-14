const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

async function captureScreenshots() {
  console.log('📸 Taking screenshots of the quiz...\n');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  
  const screenshotsDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }
  
  try {
    // 1. Quiz Selector
    console.log('1️⃣  Quiz Selector Screen');
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: path.join(screenshotsDir, '01-quiz-selector.png') });
    
    // 2. Start Screen (Dog Breeds)
    console.log('2️⃣  Start Screen - Dog Breeds');
    await page.click('text=Dog Breeds');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: path.join(screenshotsDir, '02-start-screen-dog.png') });
    
    // 3. Quiz Question 1
    console.log('3️⃣  Quiz Question 1');
    await page.click('text=Start Quiz');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: path.join(screenshotsDir, '03-question-1.png') });
    
    // 4. Answer selected (show green/red feedback)
    console.log('4️⃣  Answer Selected');
    const options = await page.locator('button[class*="option"]').all();
    if (options.length > 0) {
      await options[0].click();
      await page.waitForTimeout(1500);
      await page.screenshot({ path: path.join(screenshotsDir, '04-answer-selected.png') });
    }
    
    // 5. Go back and try World Wonders
    console.log('5️⃣  Quiz Selector again');
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(screenshotsDir, '05-selector-again.png') });
    
    // 6. Start Screen (World Wonders)
    console.log('6️⃣  Start Screen - World Wonders');
    await page.click('text=World Wonders');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: path.join(screenshotsDir, '06-start-screen-wonders.png') });
    
    // 7. World Wonders Question
    console.log('7️⃣  World Wonders Question');
    await page.click('text=Start Quiz');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: path.join(screenshotsDir, '07-wonders-question.png') });
    
    // 8. Answer some questions and get to results
    console.log('8️⃣  Playing through to results...');
    for (let i = 0; i < 8; i++) {
      const opts = await page.locator('button[class*="option"]').all();
      if (opts.length > 0) {
        await opts[Math.floor(Math.random() * opts.length)].click();
        await page.waitForTimeout(1000);
      }
      const nextBtn = page.locator('text=Next').first();
      if (await nextBtn.isVisible().catch(() => false)) {
        await nextBtn.click();
        await page.waitForTimeout(1000);
      } else {
        await page.waitForTimeout(1500);
      }
    }
    await page.waitForTimeout(2000);
    await page.screenshot({ path: path.join(screenshotsDir, '08-results-screen.png') });
    
    console.log('\n✅ All screenshots captured!');
    console.log('📁 Location: screenshots/\n');
    
    // List files
    const files = fs.readdirSync(screenshotsDir).filter(f => f.endsWith('.png')).sort();
    files.forEach(f => {
      const stats = fs.statSync(path.join(screenshotsDir, f));
      console.log(`   📸 ${f} (${(stats.size / 1024).toFixed(1)} KB)`);
    });
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    await page.screenshot({ path: path.join(screenshotsDir, 'error.png') });
  } finally {
    await browser.close();
  }
}

captureScreenshots();
