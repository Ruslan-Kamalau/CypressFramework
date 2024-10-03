export class MainPage {
 
    private searchInput = '#twotabsearchtextbox';
    private searchButton = '#nav-search-submit-button'; 
    private accountListButton = '#nav-link-accountList';
    private firstProductInSearch = '.s-main-slot .s-search-results .s-result-item';
    private suggestionList = '.s-suggestion';
  
    searchProduct(productName: string) {
      cy.get(this.searchInput).clear().type(productName);
      cy.get(this.searchButton).click();
    }

    typeInSearchBar(query: string) {
      cy.get(this.searchInput).clear().type(query);
    }
  
    clickAccountList() {
      cy.get(this.accountListButton).click();
    }

    clickFirstProduct() {
      cy.get(this.firstProductInSearch).first().click();
    }

    verifySearchSuggestionsVisible() {
      cy.get(this.suggestionList).should('exist').and('be.visible');
  }

  verifySuggestionsContainText(suggestion1: string, suggestion2: string) {
    cy.get(this.suggestionList).should('contain.text', suggestion1);
    cy.get(this.suggestionList).should('contain.text', suggestion2);
  }
}