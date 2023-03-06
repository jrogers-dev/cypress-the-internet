/// <reference types="Cypress" />

describe('Completes tests on elements at https://the-internet.herokuapp.com/dropdown', () => {
  it('Passes if the page exists', () => {
    cy.visit('https://the-internet.herokuapp.com/dropdown');
  });

  it('Passes if dropdown menu is functional and values are correct when selected', () => {
    cy.visit('https://the-internet.herokuapp.com/dropdown');
    cy.get('#dropdown').select('Option 1').should('have.value', '1');
    cy.get('#dropdown').select('Option 2').should('have.value', '2');
  });
})