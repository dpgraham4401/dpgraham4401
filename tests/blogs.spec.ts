import { expect, test } from "@playwright/test";

test("Test navigating to the article", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("main")).toContainText(/vim pirate/i);
  await page.getByRole("navigation").getByText("article").click();
  await expect(page.getByRole("heading")).toContainText("Articles");
});
