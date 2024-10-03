export default class OrdersPage {

    private orderHistoryButton = '#nav-orders';
    private orderListSelector = '.a-box-group .a-box-inner';
  
    navigateToOrderHistory() {
      cy.get(this.orderHistoryButton).click();
    }
  
    verifyOrdersExist() {
      cy.get(this.orderListSelector).should('exist').and('be.visible');
    }
  
    verifyEachOrderIsVisible() {
      cy.get(this.orderListSelector).each((order) => {
        cy.wrap(order).should('be.visible');
      });
    }
  }