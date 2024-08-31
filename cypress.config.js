const { defineConfig } = require('cypress');
// https://www.browserstack.com/guide/cypress-cucumber-preprocessor
//https://youtu.be/sfMuzYibJTM?si=56GRgvWQQUF2ALgM

module.exports = defineConfig({
  //conexão com Cypress Cloud
  projectId: 'y3nbuo',

  // Configuração do Cucumber preprocessor
  'cypress-cucumber-preprocessor': {
// Define se os Steps sao Globais ou locais, sendo false como local
      nonGlobalStepDefinitions: true,
      step_definitions: './cypress/support/step_definitions/**/*.cy.js', // steps estão dentro da pasta step_definitions
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },

    chromeWebSecurity: false, // desabilita a politica de proteção do Chrome para automações
    specPattern: './cypress/e2e/**/*.feature', // Define onde está o arquivo para os testes
    supportFile: false, 
    // supportFile: 'cypress/support/e2e.js', 
    baseUrl: 'https://www.saucedemo.com/v1/',
  },
});
