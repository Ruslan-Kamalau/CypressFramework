import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const amazonUrl = Cypress.env('AMAZON_URL');
const email = Cypress.env('AMAZON_EMAIL');
const password = Cypress.env('AMAZON_PASSWORD');

Given('I open the Amazon login page', () => {
    cy.visit(amazonUrl);

    cy.get('#nav-link-accountList').click();
});

When('I enter valid credentials', () => {
    cy.get('input[name="email"]').type(email);
    cy.get('input[type="submit"]').click();

    cy.get('input[name="password"]').type(password);
    cy.get('input[type="submit"]').click();
});

Then('I should be redirected to the homepage', () => {
    cy.url().should('eq', amazonUrl);
});

Then('I should see my account name', () => {
    cy.get('#nav-link-accountList .nav-line-1').should('contain.text', 'Hello, YourName');
});