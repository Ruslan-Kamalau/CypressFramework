import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am logged into Amazon with valid credentials', () => {
    cy.visit('https://www.amazon.com/');
    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').type(Cypress.env('AMAZON_EMAIL'));
    cy.get('#continue').click();
    cy.get('#ap_password').type(Cypress.env('AMAZON_PASSWORD'));
    cy.get('#signInSubmit').click();
});

When('I navigate to the customer service page', () => {
    cy.get('#nav-link-help').click();
});

Then('I should see options to contact customer service', () => {
    cy.get('.a-declarative').should('contain.text', 'Contact Us');
});

When('I choose to chat with a representative', () => {
    cy.get('a[href*="chat"]').click(); // Adjust selector as needed
});

Then('I should be able to start a chat session', () => {
    cy.get('.chat-container').should('exist').and('be.visible');
});
