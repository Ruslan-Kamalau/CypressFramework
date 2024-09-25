export class HelperMethods {
  
    shouldContainText(selector: string, expectedText: string) {
      cy.get(selector).should('contain.text', expectedText);
    }
  
    shouldExist(selector: string) {
      cy.get(selector).should('exist');
    }
  
    shouldBeVisible(selector: string) {
      cy.get(selector).should('be.visible');
    }
  
    shouldHaveAttribute(selector: string, attribute: string, value: string) {
      cy.get(selector).should('have.attr', attribute, value);
    }
  
    waitForElement(selector: string, timeout: number = 10000) {
      cy.get(selector, { timeout }).should('be.visible');
    }

    waitForText(selector: string, expectedText: string, timeout: number = 10000) {
      cy.get(selector, { timeout }).should('contain.text', expectedText);
    }
  }