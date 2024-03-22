const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl: "https://www.saucedemo.com/",
    standardUser: "standard_user", 
    lockedUser: "locked_out_user",
    problemUser: "problem_user",
    performanceUser: "performance_glitch_user",
    errorUser: "error_user",
    visualUser: "visual_user",
    password: "secret_sauce"
  }
});
