/// <reference types ="cypress" />

class LoginPage {
    visit() {
        cy.visit( '/' );
    }

    enterUsername( username ) {
        return  cy.get( '[data-test="username"]' ).type( username );
    }

    enterPassword( password ) {
        return  cy.get( '[data-test="password"]' ).type( password );
    }

    clickLogin() {
        return  cy.get( '#login-button' ).click();
    }

    pressEnter() {
        return  cy.get( '[data-test="password"]' ).type( '{enter}' );
    }

    verifyInventoryPage() {
        return  cy.get( '.product_label' ).should( 'be.visible' );
    }

    verifyErrorMessage() {
        return  cy.get( '[data-test="error"]' ).should( 'be.visible' );
    }
}

const login = new LoginPage();

export default login;