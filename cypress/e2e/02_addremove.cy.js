describe('Completes tests on elements at https://the-internet.herokuapp.com/add_remove_elements/', () => {
  it('Passes if the page exists', () => {
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/');
  });

  it('Clicks the Add button and passes if the Delete button appears', () => {
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/');
    cy.get('.added-manually').should('not.exist');
    cy.get('button').click();
    cy.get('.added-manually').should('exist');
  });

  it('Clicks the Add button then clicks the Delete button and passes if the Delete button disappears', () => {
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/');
    cy.get('.added-manually').should('not.exist');
    cy.get('button').click();
    cy.get('.added-manually').should('exist').click();
    cy.get('.added-manually').should('not.exist');
  });
})