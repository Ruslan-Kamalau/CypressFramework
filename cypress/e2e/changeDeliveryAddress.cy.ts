import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am logged into Amazon with valid credentials', () => {
    cy.visit('https://www.amazon.com/');
    cy.get('#nav-link-accountList').click();
    cy.get('#ap_email').type(Cypress.env('AMAZON_EMAIL'));
    cy.get('#continue').click();
    cy.get('#ap_password').type(Cypress.env('AMAZON_PASSWORD'));
    cy.get('#signInSubmit').click();
});

When('I add an item to the cart', () => {
    cy.get('#twotabsearchtextbox').type('Sony WF-1000XM4 White');
    cy.get('#nav-search-submit-button').click();
    cy.get('.s-main-slot .s-result-item').first().find('h2 a').click();
    cy.get('#add-to-cart-button').click();
});

When('I proceed to checkout', () => {
    cy.get('#nav-cart').click();
    cy.get('.a-button-input').click();
});

Then('I should see an option to change the delivery address', () => {
    cy.get('#addressChangeLinkId').should('exist').and('be.visible');
});

When('I change the delivery address to {string}', (newAddress: string) => {
    cy.get('#addressChangeLinkId').click();
    cy.get('.address-book-entry').contains(newAddress).click();
});

Then('the address should be updated for the order', () => {
    cy.get('#addressChangeLinkId').should('contain.text', 'New Address');
});
