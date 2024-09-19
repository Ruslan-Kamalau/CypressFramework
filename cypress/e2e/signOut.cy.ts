import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am logged into Amazon with valid credentials', () => {
    cy.visit('https://www.amazon.com/');
    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').type(Cypress.env('AMAZON_EMAIL'));
    cy.get('#continue').click();
    cy.get('#ap_password').type(Cypress.env('AMAZON_PASSWORD'));
    cy.get('#signInSubmit').click();
});

When('I navigate to the profile page', () => {
    cy.get('#nav-link-accountList').click();
});

Then('I should see an option to sign out', () => {
    cy.get('#nav-item-signout').should('exist').and('be.visible');
});

When('I click on the sign-out option', () => {
    cy.get('#nav-item-signout').click();
});

Then('I should be redirected to the Amazon homepage', () => {
    cy.url().should('eq', 'https://www.amazon.com/');
});

Then('I should see the sign-in option on the homepage', () => {
    cy.get('#nav-link-accountList').should('contain.text', 'Sign in');
});

Then('I should not be logged into my account', () => {
    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').should('be.visible');
});
