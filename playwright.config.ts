import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: "UI",
      testMatch: ["tests/UI/**/*.spec.ts"],
      use: {
        baseURL: "https://automationexercise.com/",
        headless: true,
        screenshot: "on",
        video: "retain-on-failure",
        launchOptions: { slowMo: 50 },
      },
    },
    {
      name: "API",
      testMatch: ["tests/API/**/*.spec.ts"],
      use: {
        baseURL: "https://automationexercise.com/api/",
      },
    },
  ],
  //retries: 2, // Retry failed tests up to 2 times
  reporter: [
    ["dot"],
    ["json", { outputFile: "reports/jsonReports.json" }],
    ["allure-playwright", { outputFolder: "reports/allure-results" }], // Use Allure reporter for generating reports
    ["html", { open: "on-end" }], // Do not open the HTML report automatically after tests
  ], // Use dot reporter and output results to a JSON file, // Do not open the HTML report automatically after tests
  workers: 1, // Run tests in a single worker to avoid concurrency issues
};

export default config;
