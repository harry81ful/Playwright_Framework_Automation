import { fa, faker } from "@faker-js/faker";

export const firstName = faker.person.firstName();
export const lastName = faker.person.lastName();
export const tc2name = "harry81ful";
export const tc2email = "harry81fu@gmail.com";
export const tc2password = "Testpass";
export const password = faker.internet.password();
export const addressLine1 = faker.location.streetAddress();
export const addressLine2 = faker.location.secondaryAddress();
export const country = faker.location.country();
export const city = faker.location.city();
export const state = faker.location.state();
export const zipCode = faker.location.zipCode();
export const mobileNumber = faker.string.numeric(10);
export const gender = faker.helpers.arrayElement(["Mr", "Mrs"]);
export const comments = faker.lorem.paragraphs(2);
