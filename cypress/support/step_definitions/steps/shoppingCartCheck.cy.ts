import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am logged into Amazon with valid credentials', () => {
    cy.visit('https://www.amazon.com/');
    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').type(Cypress.env('AMAZON_EMAIL'));
    cy.get('#continue').click();
    cy.get('#ap_password').type(Cypress.env('AMAZON_PASSWORD'));
    cy.get('#signInSubmit').click();
});

When('I navigate to the shopping cart', () => {
    cy.get('#nav-cart').click();
});

Then('I should see the items currently in my cart', () => {
    cy.get('.sc-list-item').should('exist').and('be.visible');
    cy.get('.sc-product-title').each((item) => {
        cy.wrap(item).should('not.be.empty');
    });
});
