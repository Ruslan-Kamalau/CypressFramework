export class ProfilePage {
    
    private accountNameHeader = 'h1';
    private orderHistoryLink = 'a[href*="order-history"]';
  
    verifyAccountName(expectedName: string) {
      cy.get(this.accountNameHeader).should('contain.text', expectedName);
    }
  
    verifyOrderHistoryLinkExists() {
      cy.get(this.orderHistoryLink).should('exist').and('be.visible');
    }
  }