export class CustomerServicePage {

    private customerServiceLink = '#nav-link-help';
    private contactUsOption = '.a-declarative';
    private chatLink = 'a[href*="chat"]';
    private chatContainer = '.chat-container';
  
    navigateToCustomerService() {
      cy.get(this.customerServiceLink).click();
    }
  
    checkContactOptions() {
      cy.get(this.contactUsOption).should('contain.text', 'Contact Us');
    }
  
    startChat() {
      cy.get(this.chatLink).click();
    }
  
    verifyChatSession() {
      cy.get(this.chatContainer).should('exist').and('be.visible');
    }
  }