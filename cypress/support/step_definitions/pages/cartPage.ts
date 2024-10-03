export class CartPage {
    
    private addToCartButton = '#add-to-cart-button';
    private cartButton = '#nav-cart';
    private quantityDropdown = '.a-dropdown-prompt';
    private quantityOption = '.a-dropdown-link';
    private quantityInput = '.sc-action-quantity input';
    private cartItems = '.sc-list-item';
    private productTitle = '.sc-product-title';
  
    addToCart() {
      cy.get(this.addToCartButton).click();
    }
  
    navigateToCart() {
      cy.get(this.cartButton).click();
    }
  
    changeQuantity(quantity: string) {
      cy.get(this.quantityDropdown).click();
      cy.get(`${this.quantityOption}[value="${quantity}"]`).click();
    }
  
    verifyQuantity(expectedQuantity: string) {
      cy.get(this.quantityInput).should('have.value', expectedQuantity);
    }

    verifyItemsInCart() {
      cy.get(this.cartItems).should('exist').and('be.visible');
    }

    verifyItemsAreNotEmpty() {
      cy.get(this.productTitle).each((item) => {
          cy.wrap(item).should('not.be.empty');
      });
    }
  }