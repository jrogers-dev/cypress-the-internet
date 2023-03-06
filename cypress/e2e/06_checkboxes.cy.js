/// <reference types="Cypress" />

describe('Completes tests on elements at https://the-internet.herokuapp.com/checkboxes', () => {
  it('Passes if the page exists', () => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes');
  });

  it('Passes if checkboxes exist', () => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes');
    cy.get('#checkboxes > input').each( ($el) => {
      expect($el).to.exist;
    })
  });

  it('Passes if first checkbox can be checked and unchecked without affecting second box', () => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes');
    
    cy.get('#checkboxes > input').then( ($el) => {
      $el[0].click();
      expect($el[0]).to.be.checked;
      expect($el[1]).to.be.checked;

      $el[0].click();
      expect($el[0]).to.not.be.checked;
      expect($el[1]).to.be.checked;
    })
  });

  it('Passes if second checkbox can be checked and unchecked without affecting first box', () => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes');
    
    cy.get('#checkboxes > input').then( ($el) => {
      $el[1].click();
      expect($el[0]).to.not.be.checked;
      expect($el[1]).to.not.be.checked;

      $el[1].click();
      expect($el[0]).to.not.be.checked;
      expect($el[1]).to.be.checked;
    })
  });
})