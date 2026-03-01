import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 600_000,
  use: {
    actionTimeout: 600_000,
    baseURL: 'http://localhost:5173',
    headless: false,
    trace: 'on',
    video: 'on',
    launchOptions: {
      slowMo: 500,
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
