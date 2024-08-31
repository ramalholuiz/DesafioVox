const { defineConfig } = require('cypress');

module.exports = defineConfig({
  //conexão com Cypress Cloud
  projectId: 'y3nbuo',
  e2e: {
    specPattern: './cypress/e2e/feature/**/*.feature', // Define onde está o arquivo para os testes
    baseUrl: 'https://www.saucedemo.com/v1/',
    setupNodeEvents(on, config) {
      // on('file:preprocessor', cucumber());
      return require('./cypress/plugins/index.js')(on, config)
    }, 
  },
});
