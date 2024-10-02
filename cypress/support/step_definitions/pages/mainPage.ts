export class MainPage {
 
    private searchInput = '#twotabsearchtextbox';
    private searchButton = '#nav-search-submit-button'; 
    private accountListButton = '#nav-link-accountList';
    private cartButton = '#nav-cart';
    private addToCartButton = '#add-to-cart-button';
    private firstProductInSearch = '.s-main-slot .s-search-results .s-result-item';
  
    searchProduct(productName: string) {
      cy.get(this.searchInput).clear().type(productName);
      cy.get(this.searchButton).click();
    }
  
    clickAccountList() {
      cy.get(this.accountListButton).click();
    }
  
    goToCart() {
      cy.get(this.cartButton).click();
    }

    addToCart() {
        cy.get(this.firstProductInSearch).first().click();
        cy.get(this.addToCartButton).click();
    }

    clickFirstProduct() {
      cy.get(this.firstProductInSearch).first().click();
    }
  }