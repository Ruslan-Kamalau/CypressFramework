export class CheckoutPage {
    
  private proceedToCheckoutButton = '.a-button-input'; 
  private addressChangeLink = '#addressChangeLinkId';
  private addressBookEntry = '.address-book-entry';
  private selectedAddress = '#addressChangeLinkId';

  proceedToCheckout() {
    cy.log('Proceeding to checkout');
    cy.get(this.proceedToCheckoutButton).click();
  }

  shouldSeeChangeAddressOption() {
    cy.log('Verifying that the "Change Address" option is visible');
    cy.get(this.addressChangeLink).should('exist').and('be.visible');
  }

  changeDeliveryAddress(newAddress: string) {
    cy.log(`Changing delivery address to: ${newAddress}`);
    cy.get(this.addressChangeLink).click();
    cy.get(this.addressBookEntry).contains(newAddress).click();
    cy.wait(2000);
  }

  addressShouldBeUpdated(newAddress: string) {
    cy.log(`Verifying that the address has been updated to: ${newAddress}`);
    cy.get(this.selectedAddress).should('contain.text', newAddress);
  }

  verifyCheckoutPageLoaded() {
    cy.log('Ensuring the checkout page has loaded successfully');
    cy.url().should('include', '/checkout');
    cy.get(this.proceedToCheckoutButton).should('be.visible');
  }
}
