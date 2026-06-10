import { test, expect } from '@playwright/test'
import path from 'path'

test('home page loads with h1 and correct title', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toBeVisible()
  await expect(page).toHaveTitle(/Gareth Williams/)
})

test('home page full-page screenshot', async ({ page }) => {
  await page.goto('/')
  await page.screenshot({
    path: path.join('tests', 'screenshots', 'home.png'),
    fullPage: true,
  })
})

test('/writing loads with correct title', async ({ page }) => {
  await page.goto('/writing')
  await expect(page).toHaveTitle(/Writing/)
})

test('/topics/agentic-engineering loads with h1', async ({ page }) => {
  await page.goto('/topics/agentic-engineering')
  await expect(page.locator('h1')).toBeVisible()
})
