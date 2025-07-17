import { test as base } from "@playwright/test";
import { homePageElements } from "../pages/homePage";
import { singupPageElements } from "../pages/singUpLoginPage";
import { registrationFormPageElements } from "../pages/RegestrationFormpage";

type pages = {
  homePage: homePageElements;
  signupLoginPage: singupPageElements;
  registrationFormPage: registrationFormPageElements;
};

const myFixtures = base.extend<pages>({
  homePage: async ({ page }, use) => {
    const homePage = new homePageElements(page);
    await use(homePage);
  },
  signupLoginPage: async ({ page }, use) => {
    const signupLoginPage = new singupPageElements(page);
    await use(signupLoginPage);
  },
  registrationFormPage: async ({ page }, use) => {
    const registrationFormPage = new registrationFormPageElements(page);
    await use(registrationFormPage);
  },
});
export const test = myFixtures;
export const expect = myFixtures.expect;
