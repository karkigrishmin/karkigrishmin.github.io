import { test, expect } from '@playwright/test'

test.describe('Portfolio Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Grishmin Karki/)
    await expect(page.locator('h1')).toContainText('Grishmin Karki')
  })

  test('should have all navigation links', async ({ page }) => {
    await expect(page.getByText('About')).toBeVisible()
    await expect(page.getByText('Skills')).toBeVisible()
    await expect(page.getByText('Experience')).toBeVisible()
    await expect(page.getByText('Projects')).toBeVisible()
    await expect(page.getByText('Testimonials')).toBeVisible()
    await expect(page.getByText('Contact')).toBeVisible()
  })

  test('should navigate to sections when clicking nav links', async ({ page }) => {
    // Click About
    await page.getByRole('button', { name: 'About' }).click()
    await page.waitForTimeout(500) // Wait for smooth scroll

    // Verify About section is in view
    const aboutSection = page.locator('#about')
    await expect(aboutSection).toBeInViewport()
  })

  test('should have working theme toggle', async ({ page }) => {
    const themeToggle = page.getByLabel(/toggle theme/i)
    await expect(themeToggle).toBeVisible()

    // Click theme toggle
    await themeToggle.click()
    await page.waitForTimeout(300)

    // Theme should have changed (check data-theme attribute)
    const html = page.locator('html')
    const themeAttr = await html.getAttribute('data-theme')
    expect(themeAttr).toBeTruthy()
  })

  test('should have mobile menu on small screens', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })

    const mobileMenuToggle = page.getByLabel(/toggle mobile menu/i)
    await expect(mobileMenuToggle).toBeVisible()

    // Click to open mobile menu
    await mobileMenuToggle.click()
    await page.waitForTimeout(300)

    // Menu should be visible
    await expect(page.getByText('About').first()).toBeVisible()
  })

  test('should scroll to top when logo is clicked', async ({ page }) => {
    // Scroll down first
    await page.evaluate(() => window.scrollTo(0, 1000))
    await page.waitForTimeout(300)

    // Click logo
    await page.getByLabel('Scroll to top').click()
    await page.waitForTimeout(500)

    // Should be at top
    const scrollY = await page.evaluate(() => window.scrollY)
    expect(scrollY).toBeLessThan(100)
  })
})
