/// <reference types="Cypress" />

describe('Completes tests on elements at https://the-internet.herokuapp.com/digest_auth', () => {
  it('Passes if the page exists', () => {
    cy.visit('https://the-internet.herokuapp.com/digest_auth', {failOnStatusCode: false});
  });

  it('Fails as Cypress currently does not support digest authentication', () => {
    cy.visit('https://admin:admin@the-internet.herokuapp.com/digest_auth')
  });
})