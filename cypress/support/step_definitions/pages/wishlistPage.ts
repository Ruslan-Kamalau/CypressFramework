export class WishlistPage {
    
    private wishlistButton = '#add-to-wishlist-button-submit';
    private wishlistUrl = 'https://www.amazon.com/hz/wishlist/ls/';
    private wishlistProductSelector = '.a-link-normal';
  
    addToWishlist() {
      cy.get(this.wishlistButton).click();
    }
  
    visitWishlist() {
      cy.visit(this.wishlistUrl);
    }
  
    shouldSeeProductInWishlist(productName: string) {
      cy.get(this.wishlistProductSelector).should('contain.text', productName);
    }
  }