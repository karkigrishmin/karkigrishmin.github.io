import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should not have any automatically detectable accessibility issues', async ({
    page,
  }, testInfo) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()

    await testInfo.attach('accessibility-scan-results', {
      body: JSON.stringify(accessibilityScanResults, null, 2),
      contentType: 'application/json',
    })

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('should have proper heading hierarchy', async ({ page }) => {
    // Should have exactly one h1
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBe(1)

    // h1 should contain the name
    await expect(page.locator('h1')).toContainText('Grishmin Karki')
  })

  test('should have lang attribute', async ({ page }) => {
    const html = page.locator('html')
    await expect(html).toHaveAttribute('lang', 'en')
  })

  test('should have aria labels on interactive elements', async ({ page }) => {
    // Theme toggle should have aria-label
    const themeToggle = page.getByLabel(/toggle theme/i)
    await expect(themeToggle).toBeVisible()

    // Logo should have aria-label
    const logo = page.getByLabel('Scroll to top')
    await expect(logo).toBeVisible()
  })

  test('should have proper link attributes for external links', async ({ page }) => {
    // Scroll to projects section
    await page.locator('#projects').scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)

    // Get all external links
    const externalLinks = page.locator('a[rel="noopener noreferrer"]')
    const count = await externalLinks.count()

    expect(count).toBeGreaterThan(0)

    // Check each link has proper attributes
    for (let i = 0; i < count; i++) {
      const link = externalLinks.nth(i)
      await expect(link).toHaveAttribute('target', '_blank')
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })

  test('should be keyboard navigable', async ({ page }) => {
    // Press Tab to navigate
    await page.keyboard.press('Tab')
    await page.waitForTimeout(100)

    // Check if focus is on an interactive element
    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeVisible()
  })

  test('should have semantic HTML structure', async ({ page }) => {
    // Should have nav
    await expect(page.locator('nav')).toBeVisible()

    // Should have main
    await expect(page.locator('main')).toBeVisible()

    // Should have sections with IDs
    await expect(page.locator('#about')).toBeVisible()
    await expect(page.locator('#skills')).toBeVisible()
    await expect(page.locator('#experience')).toBeVisible()
    await expect(page.locator('#projects')).toBeVisible()
    await expect(page.locator('#contact')).toBeVisible()
  })
})
