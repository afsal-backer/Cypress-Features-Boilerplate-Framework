import { defineConfig } from "cypress";
import allureWriter from '@shelex/cypress-allure-plugin/writer';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
        return config;
    },
    experimentalStudio: true,
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,

    screenshotOnRunFailure: true,

    video: true,

    env: {
      homepage: "",
      allure: true,
      allureReuseAfterSpec: true
    },

    retries: {
      runMode: 1,
      openMode: 0
    },

    baseUrl: "https://automationteststore.com/",
  },
});
