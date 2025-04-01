export default class OrdersPage {
  private orderHistoryButton = '#nav-orders';
  private orderListSelector = '.a-box-group .a-box-inner';
  private orderTitleSelector = '.a-box-group .a-box-inner h2'; // Order titles

  navigateToOrderHistory() {
    cy.log('Navigating to the order history page');
    cy.get(this.orderHistoryButton).click();
  }

  verifyOrdersExist() {
    cy.log('Verifying that the order list exists');
    cy.get(this.orderListSelector).should('exist').and('be.visible');
  }

  verifyEachOrderIsVisible() {
    cy.log('Checking that each order is visible');
    cy.get(this.orderListSelector).each((order) => {
      cy.wrap(order).should('be.visible');
    });
  }

  verifyOrdersCount(expectedCount: number) {
    cy.log(`Verifying that the total number of orders is ${expectedCount}`);
    cy.get(this.orderListSelector).should('have.length', expectedCount);
  }

  verifyOrderWithTitleExists(orderTitle: string) {
    cy.log(`Checking if an order with the title "${orderTitle}" exists`);
    cy.get(this.orderTitleSelector).should('contain.text', orderTitle);
  }
}
