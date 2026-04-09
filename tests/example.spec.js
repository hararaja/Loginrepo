// @ts-check
import { test, expect } from '@playwright/test';

test('Login page', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.locator('#username').fill("rahulshettyacademy");
  await page.locator('#password').fill("learning");
  await page.locator('#terms').check();
  await page.locator('#signInBtn').click();
  await expect(page.locator('.alert-danger')).toHaveText('Incorrect username/password.');


  
});

