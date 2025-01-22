const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl: 'https://start.duckduckgo.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
