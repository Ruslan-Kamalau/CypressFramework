import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am logged into Amazon with valid credentials', () => {
    cy.visit('https://www.amazon.com/');
    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').type(Cypress.env('AMAZON_EMAIL'));
    cy.get('#continue').click();
    cy.get('#ap_password').type(Cypress.env('AMAZON_PASSWORD'));
    cy.get('#signInSubmit').click();
});

When('I navigate to the order history page', () => {
    cy.get('#nav-orders').click();
});

Then('I should see a list of my past orders', () => {
    cy.get('.a-box-group .a-box-inner').should('exist').and('be.visible');
    cy.get('.a-box-group .a-box-inner').each((order) => {
        cy.wrap(order).should('be.visible');
    });
});
