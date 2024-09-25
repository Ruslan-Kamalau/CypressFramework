import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

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

Then('I should see the product in my shopping cart', () => {
    cy.get('#nav-cart').click();
    cy.get('.sc-product-title').should('contain.text', 'Sony WF-1000XM4');
});
