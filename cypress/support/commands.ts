/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        selectProduct(productName: string): Chainable<void>;
        fillForm(nameGiven: string, email: string, body: string, submit: string, $element: string, $text: string): Chainable<void>;
    }
  }

Cypress.Commands.add('selectProduct', (productName) => {
    cy.get('.fixed_wrapper a').each((element) => {
        if (element.text().trim() === productName) {
          cy.wrap(element).click();
        }
    });
});

Cypress.Commands.add('fillForm', (nameGiven: string, email, body, submit, $element, $text) => {
    cy.get('#ContactUsFrm_first_name').type(nameGiven);
    cy.get('#ContactUsFrm_email').type(email);
    cy.get('#ContactUsFrm_enquiry').type(body);
    cy.get('button[title=Submit]').click();
    cy.get($element).should('have.text', $text);
});
