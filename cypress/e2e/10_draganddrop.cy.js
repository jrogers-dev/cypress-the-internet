/// <reference types="Cypress" />

describe('Completes tests on elements at https://the-internet.herokuapp.com/drag_and_drop', () => {
  it('Passes if the page exists', () => {
    cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
  });

  const dataTransfer = new DataTransfer();

  it('Passes if the page exists', () => {
    cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
    cy.get('#column-a').trigger("dragstart", {dataTransfer});
    cy.get('#column-b').trigger("drop", {dataTransfer});
  });
})