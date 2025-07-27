import { test, expect } from "@playwright/test";
test.describe("@APITC1 - GET all products list", () => {
  test.afterEach(async ({}, testInfo) => {
    if (testInfo.status === "passed") {
      console.log(`Test passed: ${testInfo.title}`);
    } else if (testInfo.status === "failed") {
      console.log(`Test failed: ${testInfo.title}`);
    }
  });

  test("@APITC1 - GET all products list", async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}productsList`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    //console.log("Products List:", body);

    // Optionally, check that the response contains a products array
    expect(body).toHaveProperty("products");
    expect(Array.isArray(body.products)).toBe(true);
  });
});
