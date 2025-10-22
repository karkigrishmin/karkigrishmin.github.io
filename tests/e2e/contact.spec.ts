import { test, expect } from '@playwright/test'

test.describe('Contact Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should have contact section', async ({ page }) => {
    const contactSection = page.locator('#contact')
    await expect(contactSection).toBeVisible()
  })

  test('should have email link', async ({ page }) => {
    const emailLink = page.getByRole('link', { name: /grishminkarki7@gmail.com/i })
    await expect(emailLink).toBeVisible()
    await expect(emailLink).toHaveAttribute('href', /mailto:/)
  })

  test('should have social media links', async ({ page }) => {
    // Scroll to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)

    // Check for social links
    const githubLink = page.getByLabel('GitHub')
    const linkedinLink = page.getByLabel('LinkedIn')
    const twitterLink = page.getByLabel('Twitter')

    await expect(githubLink).toBeVisible()
    await expect(linkedinLink).toBeVisible()
    await expect(twitterLink).toBeVisible()

    // Verify they open in new tab
    await expect(githubLink).toHaveAttribute('target', '_blank')
    await expect(linkedinLink).toHaveAttribute('target', '_blank')
    await expect(twitterLink).toHaveAttribute('target', '_blank')
  })

  test('should have footer with current year', async ({ page }) => {
    const currentYear = new Date().getFullYear()
    const footer = page.locator('text=/© ' + currentYear + ' Grishmin Karki/')
    await expect(footer).toBeVisible()
  })
})
