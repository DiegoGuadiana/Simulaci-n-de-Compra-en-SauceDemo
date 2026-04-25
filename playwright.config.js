// @ts-check
require('dotenv').config();
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  reporter: [
    ['list'],
    ['playwright-qase-reporter', {
      mode: 'testops',
      debug: true,
      testops: {
        api: {
          token: process.env.QASE_TOKEN,
        },
        project: process.env.QASE_PROJECT_CODE,
        uploadAttachments: true,
        run: {
          title: process.env.QASE_RUN_TITLE || 'SauceDemo E2E Playwright Run',
          complete: true,
        },
      },
    }],
  ],
  use: {
    baseURL: 'https://www.saucedemo.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    headless: false,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});