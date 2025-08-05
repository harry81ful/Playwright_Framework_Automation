import { Page, Locator } from "@playwright/test";
import {
  password,
  addressLine1,
  addressLine2,
  gender,
  state,
  city,
  zipCode,
  mobileNumber,
} from "../utilities/util";

export class registrationFormPageElements {
  readonly page: Page;
  readonly passwordInputfield: Locator;
  readonly firstNameInputfield: Locator;
  readonly lastNameInputfield: Locator;
  readonly addressInputfield: Locator;
  readonly stateInputfield: Locator;
  readonly cityInputfield: Locator;
  readonly zipCodeInputfield: Locator;
  readonly mobileNumberInputfield: Locator;
  readonly createAccountButton: Locator;
  readonly accountInfoText: Locator;
  readonly genderRadioButton: Locator;
  readonly newsLetterCheckbox: Locator;
  readonly receiveOffersCheckbox: Locator;
  readonly accountCreatedText: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.passwordInputfield = page.locator('[data-qa="password"]');
    this.firstNameInputfield = page.locator('[data-qa="first_name"]');
    this.lastNameInputfield = page.locator('[data-qa="last_name"]');
    this.addressInputfield = page.locator('[data-qa="address"]');
    this.stateInputfield = page.locator('[data-qa="state"]');
    this.cityInputfield = page.locator('[data-qa="city"]');
    this.zipCodeInputfield = page.locator('[data-qa="zipcode"]');
    this.mobileNumberInputfield = page.locator('[data-qa="mobile_number"]');
    this.createAccountButton = page.getByRole("button", {
      name: "Create Account",
    });
    this.accountInfoText = page.getByText("Enter Account Information");
    this.genderRadioButton = page.locator(
      `input[name="title"][value="${gender}"]`,
    );
    this.newsLetterCheckbox = page.locator('input[name="newsletter"]');
    this.receiveOffersCheckbox = page.locator('input[name="optin"]');
    this.accountCreatedText = page.getByText("Account Created!");
    this.continueButton = page.locator('[data-qa="continue-button"]');
  }

  async FillRegistrationForm(fName: string, lName: string, email: string) {
    await this.passwordInputfield.waitFor({ state: "visible" });
    await this.passwordInputfield.fill(password);
    await this.newsLetterCheckbox.check();
    await this.receiveOffersCheckbox.check();
    await this.firstNameInputfield.fill(fName);
    await this.lastNameInputfield.fill(lName);
    await this.addressInputfield.fill(addressLine1);
    await this.addressInputfield.fill(addressLine2);
    await this.stateInputfield.fill(state);
    await this.cityInputfield.fill(city);
    await this.zipCodeInputfield.fill(zipCode);
    await this.mobileNumberInputfield.fill(mobileNumber);
  }

  async clickCreateAccountButton() {
    await this.createAccountButton.waitFor({ state: "visible" });
    await this.createAccountButton.click();
  }
}
