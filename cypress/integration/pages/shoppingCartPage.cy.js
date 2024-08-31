/// <reference types ="cypress" />

class ShoppingCartPage {
    addProductToCart( productName ) {
        return  cy.contains( productName ).parent().parent().find( 'button' ).click();
    }

    removeProductFromCart( productName ) {
        return  cy.contains( productName ).parent().parent().find( 'button' ).click();
    }

    verifyCartItemCount( itemCount ) {
        return  cy.get( '.shopping_cart_badge' ).should( 'have.text', itemCount );
    }

    verifyCartIsEmpty() {
        return  cy.get( '.shopping_cart_badge' ).should( 'not.exist' );
    }
}

const shoppingCartPage = new ShoppingCartPage();

export default shoppingCartPage;