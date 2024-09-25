import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const amazonUrl = Cypress.env('AMAZON_URL');
const userEmail = Cypress.env('AMAZON_EMAIL');
const userPassword = Cypress.env('AMAZON_PASSWORD');
const accountName = 'Ruslan';

Given('I am logged into Amazon with valid credentials', () => {
    cy.visit(amazonUrl);

    cy.get('#nav-link-accountList').click();

    cy.get('#ap_email').type(userEmail);
    cy.get('#continue').click();

    cy.get('#ap_password').type(userPassword);
    cy.get('#signInSubmit').click();

    cy.get('#nav-link-accountList-nav-line-1').should('contain.text', accountName);
});

When('I navigate to the profile page', () => {
    cy.get('#nav-link-accountList').click();
});

Then('I should see my account name displayed', () => {
    cy.get('h1').should('contain.text', accountName);
});

Then('I should see my account orders', () => {
    cy.get('a[href*="order-history"]').should('exist').and('be.visible');
});
