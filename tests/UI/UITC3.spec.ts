import { test, expect } from "../../fixtures/pomFixtures";

test.describe("@UITC1 - New user Registeration", () => {
  test.beforeEach(async ({ page, homePage }) => {
    await homePage.goto();
    await page.waitForLoadState("load");
    await expect(homePage.homePageHeading).toBeVisible();
  });

  test.afterEach(async ({}, testInfo) => {
    if (testInfo.status === "passed") {
      console.log(`Test passed: ${testInfo.title}`);
    } else if (testInfo.status === "failed") {
      console.log(`Test failed: ${testInfo.title}`);
    }
  });

  test("UITC3 - Login with invalid user credentials", async ({
    homePage,
    signupLoginPage,
  }) => {
    // Navigate to Signup/Login page using the homePage object
    await homePage.clickMenuItem("Signup / Login");
    await expect(signupLoginPage.loginToaccountText).toBeVisible();

    // Enter invalid user credentials
  });
});
