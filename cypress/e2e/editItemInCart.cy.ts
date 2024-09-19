import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I search for {string}', (product: string) => {
    cy.visit('https://www.amazon.com/');
    cy.get('#twotabsearchtextbox').type(product);
    cy.get('#nav-search-submit-button').click();
});

When('I click on the first product in the search results', () => {
    cy.get('.s-main-slot .s-result-item').first().find('h2 a').click();
});

When('I add the product to the cart', () => {
    cy.get('#add-to-cart-button').click();
});

When('I navigate to the shopping cart', () => {
    cy.get('#nav-cart').click();
});

When('I change the quantity of the product to {string}', (quantity: string) => {
    cy.get('.a-dropdown-prompt').click();
    cy.get(`.a-dropdown-link[value="${quantity}"]`).click();
});

Then('I should see the quantity updated in the cart', () => {
    cy.get('.sc-action-quantity input').should('have.value', '2');
});
