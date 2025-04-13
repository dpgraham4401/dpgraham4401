import {expect, test} from '@playwright/test';

test('Test navigating to the blog', async ({page}) => {
  await page.goto('/');
  await expect(page.getByRole('main')).toContainText('vimpirate');
  await page.getByRole('navigation').getByText('blog').click();
  await expect(page.getByRole('heading')).toContainText('Articles');
});
