export class AddressBookPage {
  
  private accountListButton = '#nav-link-accountList';
  private addressBookLink = 'a[href*="addressselect"]';
  private addressBoxes = '.a-box';
  private addressPageHeader = 'h1'; 
  
  navigateToAddressBook() {
    cy.log('Navigating to the Address Book page');
    cy.get(this.accountListButton).click();
    cy.get(this.addressBookLink).should('be.visible').click();
    cy.url().should('include', '/addressselect'); 
    cy.log('Successfully navigated to Address Book');
  }

  checkSavedAddresses() {
    cy.log('Checking for saved delivery addresses');
    cy.get(this.addressBoxes).should('exist').and('be.visible');
    cy.get(this.addressBoxes).each((address, index) => {
      cy.wrap(address)
        .should('be.visible')
        .and('not.be.empty');
      cy.log(`Verified address box #${index + 1}`);
    });
  }

  verifyAddressBookPageLoaded() {
    cy.log('Verifying that the address book page has fully loaded');
    cy.get(this.addressPageHeader).should('contain.text', 'Your Addresses');
  }
}
