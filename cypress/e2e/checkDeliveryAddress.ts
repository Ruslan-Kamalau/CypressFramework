import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am logged into Amazon with valid credentials', () => {
    cy.visit('https://www.amazon.com/');
    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').type(Cypress.env('AMAZON_EMAIL'));
    cy.get('#continue').click();
    cy.get('#ap_password').type(Cypress.env('AMAZON_PASSWORD'));
    cy.get('#signInSubmit').click();
});

When('I navigate to the address book page', () => {
    cy.get('#nav-link-accountList').click();
    cy.get('a[href*="addressselect"]').click();
});

Then('I should see my saved delivery addresses', () => {
    cy.get('.a-box').should('exist').and('be.visible');
    cy.get('.a-box').each((address) => {
        cy.wrap(address).should('not.be.empty');
    });
});
