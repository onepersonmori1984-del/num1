import { test, expect } from '@playwright/test';

test.describe('Home page navigation', () => {

  // Homeページが正しく表示されるか
  test('renders Home heading', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page.locator('h1')).toHaveText('Home');
  });

  // Home → Aboutへのナビゲーション
  test('navigates to About page', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('text=About');               // ユーザーがAboutリンクをクリック
    await expect(page).toHaveURL('http://localhost:3000/about'); 
    await expect(page.locator('h1')).toHaveText('About'); 
  });

  // Home → Blogへのナビゲーション
  test('navigates to Blog page', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('text=Blog');                // ユーザーがBlogリンクをクリック
    await expect(page).toHaveURL('http://localhost:3000/blog');
    await expect(page.locator('h1')).toHaveText(/Blog/i); 
  });

  // Home → Blog/1へのナビゲーション
  test('navigates to Blog 1 detail', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('text=Blog');                // Blog一覧に行く
    await page.click('text=Blog 1');             // Blog 1 のリンクをクリック
    await expect(page).toHaveURL('http://localhost:3000/blog/1');
    await expect(page.locator('h1')).toHaveText('Blog ID: 1'); 
  });

});