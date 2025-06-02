const { defineConfig } = require("cypress");

module.exports = defineConfig({


     e2e: {
    baseURL: 'https://www.google.ca',
    viewportHeight: 1000,
    viewportWidth: 1920,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity:false
  },
});
