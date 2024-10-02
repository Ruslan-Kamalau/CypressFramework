export class AddressBookPage {
    
    private accountListButton = '#nav-link-accountList';
    private addressBookLink = 'a[href*="addressselect"]';
    private addressBoxes = '.a-box';
  
    navigateToAddressBook() {
      cy.get(this.accountListButton).click();
      cy.get(this.addressBookLink).click();
    }
  
    checkSavedAddresses() {
      cy.get(this.addressBoxes).should('exist').and('be.visible');
      cy.get(this.addressBoxes).each((address) => {
        cy.wrap(address).should('not.be.empty');
      });
    }
  }