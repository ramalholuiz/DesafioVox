export class ShoppingCartPage {
    addProductToCart( productName ) {
        cy.contains( productName ).parent().parent().find( 'button' ).click();
    }

    removeProductFromCart( productName ) {
        cy.contains( productName ).parent().parent().find( 'button' ).click();
    }

    verifyCartItemCount( itemCount ) {
        cy.get( '.shopping_cart_badge' ).should( 'have.text', itemCount );
    }

    verifyCartIsEmpty() {
        cy.get( '.shopping_cart_badge' ).should( 'not.exist' );
    }
}
