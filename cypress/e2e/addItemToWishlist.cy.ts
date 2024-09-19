import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I search for {string}', (product: string) => {
    cy.visit('https://www.amazon.com/');
    cy.get('#twotabsearchtextbox').type(product);
    cy.get('#nav-search-submit-button').click();
});

When('I click on the first product in the search results', () => {
    cy.get('.s-main-slot .s-result-item').first().find('h2 a').click();
});

When('I add the product to my wishlist', () => {
    cy.get('#add-to-wishlist-button-submit').click();
});

Then('I should see the product in my wishlist', () => {
    cy.visit('https://www.amazon.com/hz/wishlist/ls/');
    cy.get('.a-link-normal').should('contain.text', 'Sony WF-1000XM4');
});
