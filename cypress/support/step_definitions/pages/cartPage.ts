export class CartPage {
    
    private addToCartButton = '#add-to-cart-button';
    private cartButton = '#nav-cart';
    private quantityDropdown = '.a-dropdown-prompt';
    private quantityOption = '.a-dropdown-link';
    private quantityInput = '.sc-action-quantity input';
  
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
  }