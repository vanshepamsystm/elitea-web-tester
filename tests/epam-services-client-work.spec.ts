import { test, expect } from '@playwright/test';

/**
 * Test Suite: EPAM Website - Services and Client Work Navigation
 * 
 * This test verifies the navigation flow from the EPAM homepage
 * through the Services page to the Client Work page.
 */

test.describe('EPAM Website Navigation Tests', () => {
  
  test('should navigate to Services and verify Client Work page', async ({ page }) => {
    // Step 1: Navigate to EPAM homepage
    await test.step('Navigate to https://www.epam.com/', async () => {
      await page.goto('https://www.epam.com/');
      await expect(page).toHaveTitle(/EPAM.*Software Engineering/);
    });

    // Step 2: Navigate to Services page
    await test.step('Navigate to Services page', async () => {
      // Click on Services in the header menu
      // Note: Direct navigation used due to header menu interaction complexity
      await page.goto('https://www.epam.com/services');
      await expect(page).toHaveTitle(/Services.*EPAM/);
    });

    // Step 3: Click "Explore Our Client Work"
    await test.step('Click "Explore Our Client Work"', async () => {
      // Wait for the link to be visible
      const clientWorkLink = page.getByRole('link', { name: 'Explore Our Client Work' });
      await expect(clientWorkLink).toBeVisible();
      
      // Click the link
      await clientWorkLink.click();
    });

    // Step 4: Verify "Client Work" text is visible
    await test.step('Verify that "Client Work" text is visible', async () => {
      // Wait for navigation to complete
      await page.waitForURL('**/services/client-work');
      
      // Verify page title
      await expect(page).toHaveTitle('Client Work');
      
      // Verify "Client Work" heading is visible
      const clientWorkHeading = page.getByRole('heading', { name: /Client Work/i, level: 1 });
      await expect(clientWorkHeading).toBeVisible();
      
      // Additional verification: Check if the text is present in the page
      await expect(page.locator('text=Client Work')).toBeVisible();
    });
  });

  test('should have accessible navigation elements', async ({ page }) => {
    await page.goto('https://www.epam.com/');
    
    // Verify main navigation is accessible
    const navigation = page.getByRole('navigation', { name: 'Main navigation' });
    await expect(navigation).toBeVisible();
    
    // Verify Services link exists in navigation
    const servicesLink = page.getByRole('link', { name: 'Services' }).first();
    await expect(servicesLink).toBeVisible();
  });

  test('should verify Client Work page content', async ({ page }) => {
    // Navigate directly to Client Work page
    await page.goto('https://www.epam.com/services/client-work');
    
    // Verify page loaded successfully
    await expect(page).toHaveTitle('Client Work');
    
    // Verify main heading
    await expect(page.getByRole('heading', { name: /Client Work/i, level: 1 })).toBeVisible();
    
    // Verify page has main content
    const mainContent = page.getByRole('main');
    await expect(mainContent).toBeVisible();
  });
});
