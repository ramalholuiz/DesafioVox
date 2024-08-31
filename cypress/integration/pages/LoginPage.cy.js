export class LoginPage {
    visit() {
        cy.visit( '/' );
    }

    enterUsername( username ) {
        cy.get( '[data-test="username"]' ).type( username );
    }

    enterPassword( password ) {
        cy.get( '[data-test="password"]' ).type( password );
    }

    clickLogin() {
        cy.get( '#login-button' ).click();
    }

    pressEnter() {
        cy.get( '[data-test="password"]' ).type( '{enter}' );
    }

    verifyInventoryPage() {
        cy.get( '.product_label' ).should( 'be.visible' );
    }

    verifyErrorMessage() {
        cy.get( '[data-test="error"]' ).should( 'be.visible' );
    }
}
