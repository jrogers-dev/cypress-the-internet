describe('Completes tests on elements at https://the-internet.herokuapp.com/context_menu', () => {
  it('Passes if the page exists', () => {
    cy.visit('https://the-internet.herokuapp.com/context_menu');
  });

  it('Passes if the clickable hotspot exists', () => {
    cy.visit('https://the-internet.herokuapp.com/context_menu');
    cy.get("#hot-spot").should('exist');
  });

  it('Passes if rightclicking the hotspot fires an alert with the correct text', () => {
    cy.visit('https://the-internet.herokuapp.com/context_menu');
    cy.get("#hot-spot").rightclick();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('You selected a context menu');
    });
  });
})