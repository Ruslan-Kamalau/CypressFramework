export class CheckoutPage {
    
    private proceedToCheckoutButton = '.a-button-input'; 
    private addressChangeLink = '#addressChangeLinkId';
    private addressBookEntry = '.address-book-entry';
  
    proceedToCheckout() {
      cy.get(this.proceedToCheckoutButton).click();
    }
  
    shouldSeeChangeAddressOption() {
      cy.get(this.addressChangeLink).should('exist').and('be.visible');
    }
  
    changeDeliveryAddress(newAddress: string) {
      cy.get(this.addressChangeLink).click();
      cy.get(this.addressBookEntry).contains(newAddress).click();
    }
  
    addressShouldBeUpdated(newAddress: string) {
      cy.get(this.addressChangeLink).should('contain.text', newAddress);
    }
  }