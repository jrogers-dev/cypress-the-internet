describe('Completes tests on elements at https://the-internet.herokuapp.com/abtest', () => {
  it('Passes if the page exists', () => {
    cy.visit('https://the-internet.herokuapp.com/abtest');
  })

  it('Passes if the Github link exists', () => {
    cy.visit('https://the-internet.herokuapp.com/abtest');
    cy.get('body > div:nth-child(2) > a').click({force: true});
  });

  it('Passes if the Elemental Selenium link exists', () => {
    cy.visit('https://the-internet.herokuapp.com/abtest');
    cy.get('.large-4 > div > a').should('exist');
  });
})