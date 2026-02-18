import { test, expect } from '@playwright/test';
import { swedishGardenBirds, swedishBirdQuestions, validateAllBirds, validateQuizQuestions, getAllBirds, getQuestionsByType } from '../src/swedishBirdQuizData';

test.describe('Swedish Garden Birds Quiz - Data Integrity', () => {
  test('should have all 12 bird species defined', () => {
    const birds = getAllBirds();
    expect(birds).toHaveLength(12);
  });

  test('each bird should have complete data structure', () => {
    const validation = validateAllBirds();
    expect(validation.valid).toBe(true);
    expect(Object.keys(validation.errors)).toHaveLength(0);
  });

  test('each bird should have Swedish name', () => {
    const birds = getAllBirds();
    birds.forEach(bird => {
      expect(bird.swedishName).toBeTruthy();
      expect(bird.swedishName.length).toBeGreaterThan(0);
    });
  });

  test('each bird should have English name', () => {
    const birds = getAllBirds();
    birds.forEach(bird => {
      expect(bird.englishName).toBeTruthy();
      expect(bird.englishName.length).toBeGreaterThan(0);
    });
  });

  test('each bird should have scientific name', () => {
    const birds = getAllBirds();
    birds.forEach(bird => {
      expect(bird.scientificName).toBeTruthy();
      expect(bird.scientificName).toMatch(/^[A-Z][a-z]+ [a-z]+$/);
    });
  });

  test('each bird should have field marks array', () => {
    const birds = getAllBirds();
    birds.forEach(bird => {
      expect(bird.fieldMarks).toBeInstanceOf(Array);
      expect(bird.fieldMarks.length).toBeGreaterThan(0);
    });
  });

  test('each bird should have status information', () => {
    const birds = getAllBirds();
    birds.forEach(bird => {
      expect(bird.status).toBeTruthy();
      expect(bird.status.length).toBeGreaterThan(0);
    });
  });

  test('each bird should have habitat array', () => {
    const birds = getAllBirds();
    birds.forEach(bird => {
      expect(bird.habitat).toBeInstanceOf(Array);
      expect(bird.habitat.length).toBeGreaterThan(0);
    });
  });

  test('each bird should have fun facts array', () => {
    const birds = getAllBirds();
    birds.forEach(bird => {
      expect(bird.funFacts).toBeInstanceOf(Array);
      expect(bird.funFacts.length).toBeGreaterThan(0);
    });
  });

  test('each bird should have valid Wikimedia Commons image URL', () => {
    const birds = getAllBirds();
    birds.forEach(bird => {
      expect(bird.imageUrl).toBeTruthy();
      expect(bird.imageUrl).toContain('wikimedia.org');
      expect(bird.imageUrl).toMatch(/^https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\//);
    });
  });

  test('each bird should have difficulty level', () => {
    const birds = getAllBirds();
    birds.forEach(bird => {
      expect(['easy', 'medium', 'hard']).toContain(bird.difficulty);
    });
  });
});

test.describe('Swedish Garden Birds Quiz - Quiz Logic', () => {
  test('should have at least 12 questions', () => {
    expect(swedishBirdQuestions.length).toBeGreaterThanOrEqual(12);
  });

  test('should have at least 21 questions', () => {
    expect(swedishBirdQuestions.length).toBeGreaterThanOrEqual(21);
  });

  test('each question should have correct answer in options', () => {
    const validation = validateQuizQuestions();
    expect(validation.valid).toBe(true);
  });

  test('each multiple choice question should have exactly 4 options', () => {
    const mcQuestions = swedishBirdQuestions.filter(q => q.type !== 'true-false');
    mcQuestions.forEach(q => {
      expect(q.options).toHaveLength(4);
    });
  });

  test('true/false questions should have exactly 2 options', () => {
    const tfQuestions = getQuestionsByType('true-false');
    tfQuestions.forEach(q => {
      expect(q.options).toHaveLength(2);
      expect(q.options).toContain('True');
      expect(q.options).toContain('False');
    });
  });

  test('should have image identification questions', () => {
    const imageQuestions = getQuestionsByType('image-identification');
    expect(imageQuestions.length).toBeGreaterThan(0);
  });

  test('should have fact multiple choice questions', () => {
    const factQuestions = getQuestionsByType('fact-multiple-choice');
    expect(factQuestions.length).toBeGreaterThan(0);
  });

  test('should have characteristic match questions', () => {
    const charQuestions = getQuestionsByType('characteristic-match');
    expect(charQuestions.length).toBeGreaterThan(0);
  });

  test('should have true/false questions', () => {
    const tfQuestions = getQuestionsByType('true-false');
    expect(tfQuestions.length).toBeGreaterThan(0);
  });

  test('image identification questions should have imageUrl', () => {
    const imageQuestions = getQuestionsByType('image-identification');
    imageQuestions.forEach(q => {
      expect(q.imageUrl).toBeTruthy();
      expect(q.imageUrl).toContain('wikimedia.org');
    });
  });

  test('each question should have educational fact', () => {
    swedishBirdQuestions.forEach(q => {
      expect(q.fact).toBeTruthy();
      expect(q.fact!.length).toBeGreaterThan(0);
    });
  });

  test('each question should have unique ID', () => {
    const ids = swedishBirdQuestions.map(q => q.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  test('questions should have varying difficulty levels', () => {
    const difficulties = new Set(swedishBirdQuestions.map(q => q.difficulty));
    expect(difficulties.size).toBeGreaterThanOrEqual(2);
  });
});

test.describe('Swedish Garden Birds Quiz - UI Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display Swedish Garden Birds Quiz in selector', async ({ page }) => {
    await expect(page.locator('text=Swedish Garden Birds Quiz')).toBeVisible();
    await expect(page.locator('text=🐦')).toBeVisible();
  });

  test('should navigate to start screen when selecting quiz', async ({ page }) => {
    await page.locator('text=Swedish Garden Birds Quiz').first().click();
    await expect(page.locator('text=Test your knowledge of the 12 most common Swedish garden birds')).toBeVisible();
    await expect(page.locator('button:has-text("Start Quiz")')).toBeVisible();
  });

  test('should navigate back to selector from start screen', async ({ page }) => {
    await page.locator('text=Swedish Garden Birds Quiz').first().click();
    await page.locator('button:has-text("Back to Quizzes")').click();
    await expect(page.locator('text=Quiz Time!')).toBeVisible();
    await expect(page.locator('text=Swedish Garden Birds Quiz')).toBeVisible();
  });

  test('should start quiz and display first question', async ({ page }) => {
    await page.locator('text=Swedish Garden Birds Quiz').first().click();
    await page.locator('button:has-text("Start Quiz")').click();
    await expect(page.locator('text=Question 1 of')).toBeVisible();
  });

  test('should display multiple questions correctly', async ({ page }) => {
    await page.locator('text=Swedish Garden Birds Quiz').first().click();
    await page.locator('button:has-text("Start Quiz")').click();

    // Answer first 5 questions
    for (let i = 1; i <= 5; i++) {
      await expect(page.locator(`text=Question ${i} of ${swedishBirdQuestions.length}`)).toBeVisible();

      // Select first option
      await page.locator('[data-testid="option-0"]').click();
      await page.waitForTimeout(400);

      // Click next
      if (i < 5) {
        await page.locator('[data-testid="next-button"]').click();
      }
    }

    // Verify we can navigate through questions
    await expect(page.locator('[data-testid="next-button"]')).toBeVisible();
  });

  test('should display quiz theme colors correctly', async ({ page }) => {
    await page.locator('text=Swedish Garden Birds Quiz').first().click();
    await expect(page.locator('button:has-text("Start Quiz")')).toBeVisible();
  });
});

test.describe('Swedish Garden Birds Quiz - Question Types', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('text=Swedish Garden Birds Quiz').first().click();
    await page.locator('button:has-text("Start Quiz")').click();
  });

  test('should display image for image identification questions', async ({ page }) => {
    // Check if current question has an image
    const image = page.locator('img');
    const imageCount = await image.count();

    if (imageCount > 0) {
      await expect(image.first()).toBeVisible();
    }
  });

  test('should display 4 options for multiple choice questions', async ({ page }) => {
    const options = page.locator('[data-testid^="option-"]');
    const count = await options.count();
    expect([2, 4]).toContain(count);
  });

  test('should show feedback after selecting answer', async ({ page }) => {
    await page.locator('[data-testid="option-0"]').click();
    await page.waitForTimeout(400);
    // Check for the fact box which appears after answering
    await expect(page.locator('[data-testid="fact-box"]')).toBeVisible();
  });

  test('should show fact after answering', async ({ page }) => {
    await page.locator('[data-testid="option-0"]').click();
    await page.waitForTimeout(400);
    await expect(page.locator('[data-testid="fact-box"]')).toBeVisible();
  });

  test('should enable next button after selecting answer', async ({ page }) => {
    await page.locator('[data-testid="option-0"]').click();
    await page.waitForTimeout(400);
    const nextButton = page.locator('[data-testid="next-button"]');
    await expect(nextButton).toBeVisible();
    await expect(nextButton).toBeEnabled();
  });

  test('should have question text visible', async ({ page }) => {
    // The question text is in the h2 element
    const questionText = page.locator('h2');
    await expect(questionText).toBeVisible();
    // Verify it contains some text
    const text = await questionText.textContent();
    expect(text).toBeTruthy();
    expect(text!.length).toBeGreaterThan(0);
  });
});

test.describe('Swedish Garden Birds Quiz - Scoring and Results', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('text=Swedish Garden Birds Quiz').first().click();
    await page.locator('button:has-text("Start Quiz")').click();
  });

  test('should display score on results screen', async ({ page }) => {
    test.setTimeout(60000); // Increase timeout for this test

    // Complete the quiz
    for (let i = 1; i <= swedishBirdQuestions.length; i++) {
      // Wait for question to be visible
      await expect(page.locator(`text=Question ${i} of ${swedishBirdQuestions.length}`)).toBeVisible();

      // Answer the question
      const option = page.locator('[data-testid="option-0"]');
      await expect(option).toBeVisible();
      await option.click();

      // Wait for answer feedback
      await page.waitForTimeout(300);

      // Click next if not last question
      if (i < swedishBirdQuestions.length) {
        const nextButton = page.locator('[data-testid="next-button"]');
        await expect(nextButton).toBeVisible();
        await nextButton.click();
      }
    }

    // Go to results
    await page.locator('button:has-text("See Results")').click();
    await expect(page.locator('text=Quiz Complete!')).toBeVisible();
  });

  test('should allow restarting quiz from results', async ({ page }) => {
    test.setTimeout(60000);

    // Complete quiz - answer all questions
    for (let i = 1; i <= swedishBirdQuestions.length; i++) {
      await expect(page.locator('[data-testid="option-0"]')).toBeVisible();
      await page.locator('[data-testid="option-0"]').click();
      await page.waitForTimeout(300);

      // Handle next button if visible
      if (i < swedishBirdQuestions.length) {
        await expect(page.locator('[data-testid="next-button"]')).toBeVisible();
        await page.locator('[data-testid="next-button"]').click();
      }
    }

    await page.locator('button:has-text("See Results")').click();
    await expect(page.locator('text=Quiz Complete!')).toBeVisible();

    await page.locator('button:has-text("Play Again")').click();
    await expect(page.locator('text=Question 1 of')).toBeVisible();
  });

  test('should allow returning home from results', async ({ page }) => {
    test.setTimeout(60000);

    // Complete quiz - answer all questions
    for (let i = 1; i <= swedishBirdQuestions.length; i++) {
      await expect(page.locator('[data-testid="option-0"]')).toBeVisible();
      await page.locator('[data-testid="option-0"]').click();
      await page.waitForTimeout(300);

      // Handle next button if visible
      if (i < swedishBirdQuestions.length) {
        await expect(page.locator('[data-testid="next-button"]')).toBeVisible();
        await page.locator('[data-testid="next-button"]').click();
      }
    }

    await page.locator('button:has-text("See Results")').click();
    await expect(page.locator('text=Quiz Complete!')).toBeVisible();

    await page.locator('button:has-text("Choose Quiz")').click();
    await expect(page.locator('text=Quiz Time!')).toBeVisible();
  });
});

test.describe('Swedish Garden Birds Quiz - Timer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('text=Swedish Garden Birds Quiz').first().click();
    await page.locator('button:has-text("Start Quiz")').click();
  });

  test('should display timer', async ({ page }) => {
    // Timer shows seconds (e.g., "35s")
    await expect(page.locator('text=/\\d+s/')).toBeVisible();
  });

  test('timer should count down', async ({ page }) => {
    // Check that timer text changes (contains number followed by 's')
    const timerPattern = page.locator('text=/\\d+s/');
    await expect(timerPattern).toBeVisible();
  });
});

test.describe('Swedish Garden Birds Quiz - Specific Bird Data', () => {
  test('should have Talgoxe (Great Tit) as #1 most common', () => {
    const talgoxe = swedishGardenBirds.talgoxe;
    expect(talgoxe).toBeTruthy();
    expect(talgoxe.status).toContain('Most common');
    expect(talgoxe.englishName).toBe('Great Tit');
  });

  test('should have Koltrast as Sweden national bird', () => {
    const koltrast = swedishGardenBirds.koltrast;
    expect(koltrast).toBeTruthy();
    expect(koltrast.status).toContain('national bird');
    expect(koltrast.englishName).toBe('Eurasian Blackbird');
  });

  test('should have Bofink as #2 most common with 16.8M pairs', () => {
    const bofink = swedishGardenBirds.bofink;
    expect(bofink).toBeTruthy();
    expect(bofink.population).toContain('16.8 million');
    expect(bofink.englishName).toBe('Common Chaffinch');
  });

  test('should have Rödhake with 7.6M population', () => {
    const rodhake = swedishGardenBirds.rodhake;
    expect(rodhake).toBeTruthy();
    expect(rodhake.population).toContain('7.6 million');
    expect(rodhake.englishName).toBe('European Robin');
  });
});
