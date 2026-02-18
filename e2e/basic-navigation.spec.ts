import { test, expect } from '@playwright/test';

test.describe('Dog Breed Quiz - Basic Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display quiz selector on homepage', async ({ page }) => {
    await expect(page.locator('text=Quiz Time!')).toBeVisible();
    await expect(page.locator('text=Choose a quiz to test your knowledge')).toBeVisible();
    await expect(page.locator('text=Dog Breed Facts Quiz')).toBeVisible();
    await expect(page.locator('text=World Wonders Quiz')).toBeVisible();
  });

  test('should navigate to start screen when selecting dog breed quiz', async ({ page }) => {
    await page.locator('text=Dog Breed Facts Quiz').first().click();
    await expect(page.locator('text=Test your knowledge of 12 popular AKC breeds')).toBeVisible();
    await expect(page.locator('button:has-text("Start Quiz")')).toBeVisible();
  });

  test('should navigate back to selector from start screen', async ({ page }) => {
    await page.locator('text=Dog Breed Facts Quiz').first().click();
    await page.locator('button:has-text("Back to Quizzes")').click();
    await expect(page.locator('text=Quiz Time!')).toBeVisible();
  });

  test('should start quiz and display first question', async ({ page }) => {
    await page.locator('text=Dog Breed Facts Quiz').first().click();
    await page.locator('button:has-text("Start Quiz")').click();
    await expect(page.locator('text=Question 1 of 12')).toBeVisible();
  });

  test('should display all 12 questions correctly', async ({ page }) => {
    await page.locator('text=Dog Breed Facts Quiz').first().click();
    await page.locator('button:has-text("Start Quiz")').click();
    
    // Answer all 12 questions
    for (let i = 1; i <= 12; i++) {
      await expect(page.locator(`text=Question ${i} of 12`)).toBeVisible();
      
      // Select first option
      await page.locator('[data-testid="option-0"]').click();
      await page.waitForTimeout(400);
      
      // Click next if not last question
      if (i < 12) {
        await page.locator('[data-testid="next-button"]').click();
      }
    }
    
    // Click See Results
    await page.locator('button:has-text("See Results")').click();
    
    // Should be on results screen
    await expect(page.locator('text=Quiz Complete!')).toBeVisible();
  });
});
