import { test, expect } from '@playwright/test';

test.describe('Dog Breed Quiz - Scoring and Results', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('text=Dog Breed Facts Quiz').first().click();
    await page.locator('button:has-text("Start Quiz")').click();
  });

  test('should track score correctly when answering correctly', async ({ page }) => {
    // Answer all questions
    for (let i = 1; i <= 12; i++) {
      await page.locator('[data-testid="option-0"]').click();
      await page.waitForTimeout(400);
      
      if (i < 12) {
        await page.locator('[data-testid="next-button"]').click();
      }
    }
    
    // Click See Results
    await page.locator('button:has-text("See Results")').click();
    
    // Should see results
    await expect(page.locator('text=Quiz Complete!')).toBeVisible();
    
    // Should show score stats
    await expect(page.locator('span:has-text("Correct")').first()).toBeVisible();
    await expect(page.locator('span:has-text("Incorrect")').first()).toBeVisible();
    await expect(page.locator('span:has-text("Total")').first()).toBeVisible();
    
    // Should show percentage
    const percentageText = page.locator('text=/\\d+%/');
    await expect(percentageText).toBeVisible();
  });

  test('should display correct answer feedback', async ({ page }) => {
    // Click on first option
    await page.locator('[data-testid="option-0"]').click();
    await page.waitForTimeout(400);
    
    // Should show visual feedback (correct/incorrect styling)
    const selectedOption = page.locator('[data-testid="option-0"]').first();
    const classAttribute = await selectedOption.getAttribute('class');
    
    // Should have either correct or incorrect class
    expect(classAttribute?.includes('correct') || classAttribute?.includes('incorrect')).toBe(true);
  });

  test('should show checkmark on correct answer', async ({ page }) => {
    // Answer question
    await page.locator('[data-testid="option-0"]').click();
    await page.waitForTimeout(400);
    
    // Find the option with checkmark (svg)
    const optionsWithCheckmarks = page.locator('[data-testid^="option-"] svg');
    await expect(optionsWithCheckmarks.first()).toBeVisible();
  });

  test('should navigate to results after last question', async ({ page }) => {
    // Answer all questions
    for (let i = 1; i <= 12; i++) {
      await page.locator('[data-testid="option-0"]').click();
      await page.waitForTimeout(400);
      
      if (i < 12) {
        await page.locator('[data-testid="next-button"]').click();
      }
    }
    
    // Should see "See Results" button on last question
    await expect(page.locator('button:has-text("See Results")')).toBeVisible();
    
    // Click it
    await page.locator('button:has-text("See Results")').click();
    
    // Should be on results screen
    await expect(page.locator('text=Quiz Complete!')).toBeVisible();
  });

  test('should allow restarting the quiz from results', async ({ page }) => {
    // Complete quiz
    for (let i = 1; i <= 12; i++) {
      await page.locator('[data-testid="option-0"]').click();
      await page.waitForTimeout(400);
      
      if (i < 12) {
        await page.locator('[data-testid="next-button"]').click();
      }
    }
    
    await page.locator('button:has-text("See Results")').click();
    
    // Click restart (Play Again)
    await page.locator('button:has-text("Play Again")').click();
    
    // Should be back to question 1
    await expect(page.locator('text=Question 1 of 12')).toBeVisible();
  });

  test('should allow returning to home from results', async ({ page }) => {
    // Complete quiz
    for (let i = 1; i <= 12; i++) {
      await page.locator('[data-testid="option-0"]').click();
      await page.waitForTimeout(400);
      
      if (i < 12) {
        await page.locator('[data-testid="next-button"]').click();
      }
    }
    
    await page.locator('button:has-text("See Results")').click();
    
    // Click home (Choose Quiz)
    await page.locator('button:has-text("Choose Quiz")').click();
    
    // Should be on quiz selector
    await expect(page.locator('text=Quiz Time!')).toBeVisible();
  });
});
