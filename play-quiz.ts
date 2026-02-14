import { chromium } from '@playwright/test';
import type { Browser, Page } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

async function playQuiz() {
  console.log('🎮 Starting Dog Breed Quiz Automation...\n');
  
  const browser = await chromium.launch({
    headless: true,
  });
  
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });
  
  const page = await context.newPage();
  
  try {
    // Navigate to the quiz
    console.log('📍 Loading quiz at http://localhost:5173');
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Take screenshot of quiz selector
    await takeScreenshot(page, '01-quiz-selector');
    console.log('🎯 Quiz Selector Screen - Shows two quiz cards');
    
    // Find and click Dog Breeds quiz by looking for the button with dog icon
    console.log('🐕 Selecting "Dog Breeds" quiz...');
    const quizButtons = await page.locator('button').all();
    for (const btn of quizButtons) {
      const text = await btn.textContent();
      if (text && text.includes('Dog Breeds')) {
        await btn.click();
        break;
      }
    }
    await page.waitForTimeout(1500);
    
    // Take screenshot of start screen
    await takeScreenshot(page, '02-start-screen');
    console.log('📋 Start Screen - "Guess the Dog Breed"');
    
    // Get quiz stats
    const statsText = await page.locator('text=/\\d+ Questions/').first().textContent().catch(() => '35 Questions');
    const timeText = await page.locator('text=/\\d+s Per Question/').first().textContent().catch(() => '30s Per Question');
    console.log(`   ${statsText} | ${timeText}`);
    
    // Click Start Quiz
    console.log('▶️  Starting quiz...\n');
    await page.click('button:has-text("Start Quiz")');
    await page.waitForTimeout(1500);
    
    let questionNum = 1;
    let correctCount = 0;
    const totalQuestions = 5; // Play first 5 questions for demo
    
    while (questionNum <= totalQuestions) {
      console.log(`\n❓ Question ${questionNum}/${totalQuestions}`);
      
      // Wait for the question image to load
      await page.waitForSelector('img', { timeout: 5000 }).catch(() => {});
      await page.waitForTimeout(1000);
      
      // Take screenshot of the question
      await takeScreenshot(page, `03-question-${questionNum}`);
      
      // Get the options from the option buttons
      const optionButtons = await page.locator('button[class*="option"]').all();
      const options: string[] = [];
      
      for (const btn of optionButtons.slice(0, 4)) {
        const text = await btn.textContent();
        if (text) {
          // Remove the letter prefix (A, B, C, D)
          const cleanText = text.replace(/^[A-D]\s*/, '').trim();
          if (cleanText && cleanText.length > 1) {
            options.push(cleanText);
          }
        }
      }
      
      console.log(`   Options: ${options.join(' | ')}`);
      
      if (options.length === 0) {
        console.log('   ⚠️  Could not find options, trying alternative selector...');
        // Try to find any button with text that looks like a dog breed
        const allButtons = await page.locator('button').all();
        for (const btn of allButtons) {
          const text = await btn.textContent();
          if (text && text.length > 3 && !text.includes('Start') && !text.includes('Next') && !text.includes('Back')) {
            const cleanText = text.replace(/^[A-D]\s*/, '').trim();
            if (cleanText && !options.includes(cleanText)) {
              options.push(cleanText);
            }
          }
        }
        console.log(`   Found ${options.length} options: ${options.join(' | ')}`);
      }
      
      if (options.length > 0) {
        // Pick a random answer
        const randomIndex = Math.floor(Math.random() * options.length);
        const selectedAnswer = options[randomIndex];
        console.log(`   My answer: ${selectedAnswer}`);
        
        // Click the answer button
        await page.click(`button:has-text("${selectedAnswer}")`);
        await page.waitForTimeout(1500);
        
        // Check if answer was correct by looking for the checkmark or correct styling
        const clickedButton = page.locator(`button:has-text("${selectedAnswer}")`).first();
        const buttonClasses = await clickedButton.getAttribute('class').catch(() => '');
        
        // Look for correct/incorrect classes
        const isCorrect = buttonClasses.includes('correct') || 
                         await page.locator('button[class*="correct"]').first().textContent()
                           .then(t => t?.includes(selectedAnswer) || false)
                           .catch(() => false);
        
        if (isCorrect) {
          correctCount++;
          console.log('   ✅ CORRECT!');
        } else {
          // Find what the correct answer was
          const correctButton = await page.locator('button[class*="correct"]').first();
          const correctText = await correctButton.textContent().catch(() => 'Unknown');
          const cleanCorrect = correctText.replace(/^[A-D]\s*/, '').trim();
          console.log(`   ❌ Wrong! Correct answer was: ${cleanCorrect}`);
        }
      } else {
        console.log('   ⚠️  No options found, skipping question');
      }
      
      await page.waitForTimeout(500);
      questionNum++;
      
      // Look for and click Next button
      const nextButton = page.locator('button:has-text("Next")').first();
      if (await nextButton.isVisible().catch(() => false)) {
        await nextButton.click();
        await page.waitForTimeout(1500);
      } else {
        // Wait a bit for auto-advance or next question
        await page.waitForTimeout(2000);
      }
    }
    
    // Wait for results screen
    await page.waitForTimeout(2000);
    await takeScreenshot(page, '04-results-screen');
    
    // Get final score if visible
    const scoreText = await page.locator('text=/\\d+%/').first().textContent().catch(() => null);
    const resultsTitle = await page.locator('text=Quiz Complete!').first().isVisible().catch(() => false);
    
    console.log(`\n🏆 QUIZ COMPLETE!`);
    if (scoreText) {
      console.log(`   Final Score: ${scoreText}`);
    } else {
      console.log(`   My Score: ${correctCount}/${totalQuestions} (${Math.round(correctCount/totalQuestions*100)}%)`);
    }
    console.log(`\n📸 Screenshots saved to: screenshots/\n`);
    
  } catch (error) {
    console.error('❌ Error playing quiz:', error);
    await takeScreenshot(page, 'error-screenshot');
  } finally {
    await browser.close();
  }
}

async function takeScreenshot(page: Page, name: string) {
  const screenshotDir = path.join(process.cwd(), 'screenshots');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }
  
  const screenshotPath = path.join(screenshotDir, `${name}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: false });
  console.log(`   📸 Screenshot: ${name}.png`);
}

playQuiz();
