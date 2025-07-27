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

  test("UITC1 - navigate to signup page enter the details and regiseration forms", async ({
    homePage,
    signupLoginPage,
    registrationFormPage,
  }) => {
    //navigate to singnp/Login page using the homePage object
    await homePage.clickMenuItem("Signup / Login");

    const { fName, lName, email } = await signupLoginPage.signUpDetails();
    console.log(`User details: ${fName} ${lName}, Email: ${email}`);
    await signupLoginPage.signUpDetails();

    // Click the signup button
    await signupLoginPage.clickSingupButton();

    await registrationFormPage.accountInfoText.waitFor({ state: "visible" });
    await expect(registrationFormPage.accountInfoText).toBeVisible();
    await registrationFormPage.FillRegistrationForm(fName, lName, email);
    await registrationFormPage.clickCreateAccountButton();
    await registrationFormPage.accountCreatedText.waitFor({ state: "visible" });
    await expect(registrationFormPage.accountCreatedText).toBeVisible();
  });
});
