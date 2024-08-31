import { Before, After, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

// Hook Before: Executa antes de cada cenário
Before( () => {
    // Por exemplo, você pode limpar cookies, limpar o armazenamento local, ou visitar uma página específica
    cy.clearCookies();
    cy.clearLocalStorage();
} );

// Hook After: Executa depois de cada cenário
After( () => {
    // Você pode adicionar comandos de limpeza ou relatórios aqui, se necessário
    // Por exemplo, fazer logout se o cenário estiver logado
} );

// Você também pode adicionar Given, When, Then steps compartilhados aqui se necessário
