describe('Completes tests on elements at https://the-internet.herokuapp.com/broken_images', () => {
  it('Passes if the page exists', () => {
    cy.visit('https://the-internet.herokuapp.com/challenging_dom');
  });

  it('Clicks all three side buttons', () => {
    cy.visit('https://the-internet.herokuapp.com/challenging_dom');
    cy.get('.large-2').find('.button').each( ($btn) => {
      $btn.click();
    });
  })

  it("Checks the structure and contents of the table the long way", () => {
    cy.visit('https://the-internet.herokuapp.com/challenging_dom');

    cy.get('thead > tr > :nth-child(1)').should('contain.text', 'Lorem');
    cy.get('thead > tr > :nth-child(2)').should('contain.text', 'Ipsum');
    cy.get('thead > tr > :nth-child(3)').should('contain.text', 'Dolor');
    cy.get('thead > tr > :nth-child(4)').should('contain.text', 'Sit');
    cy.get('thead > tr > :nth-child(5)').should('contain.text', 'Amet');
    cy.get('thead > tr > :nth-child(6)').should('contain.text', 'Diceret');
    cy.get('thead > tr > :nth-child(7)').should('contain.text', 'Action');

    cy.get('tbody > tr:nth-child(1) > td:nth-child(1)').should('contain.text', 'Iuvaret0');
    cy.get('tbody > tr:nth-child(2) > td:nth-child(1)').should('contain.text', 'Iuvaret1');
    cy.get('tbody > tr:nth-child(3) > td:nth-child(1)').should('contain.text', 'Iuvaret2');
    cy.get('tbody > tr:nth-child(4) > td:nth-child(1)').should('contain.text', 'Iuvaret3');
    cy.get('tbody > tr:nth-child(5) > td:nth-child(1)').should('contain.text', 'Iuvaret4');
    cy.get('tbody > tr:nth-child(6) > td:nth-child(1)').should('contain.text', 'Iuvaret5');
    cy.get('tbody > tr:nth-child(7) > td:nth-child(1)').should('contain.text', 'Iuvaret6');
    cy.get('tbody > tr:nth-child(8) > td:nth-child(1)').should('contain.text', 'Iuvaret7');
    cy.get('tbody > tr:nth-child(9) > td:nth-child(1)').should('contain.text', 'Iuvaret8');
    cy.get('tbody > tr:nth-child(10) > td:nth-child(1)').should('contain.text', 'Iuvaret9');
    
    cy.get('tbody > tr:nth-child(1) > td:nth-child(2)').should('contain.text', 'Apeirian0');
    cy.get('tbody > tr:nth-child(2) > td:nth-child(2)').should('contain.text', 'Apeirian1');
    cy.get('tbody > tr:nth-child(3) > td:nth-child(2)').should('contain.text', 'Apeirian2');
    cy.get('tbody > tr:nth-child(4) > td:nth-child(2)').should('contain.text', 'Apeirian3');
    cy.get('tbody > tr:nth-child(5) > td:nth-child(2)').should('contain.text', 'Apeirian4');
    cy.get('tbody > tr:nth-child(6) > td:nth-child(2)').should('contain.text', 'Apeirian5');
    cy.get('tbody > tr:nth-child(7) > td:nth-child(2)').should('contain.text', 'Apeirian6');
    cy.get('tbody > tr:nth-child(8) > td:nth-child(2)').should('contain.text', 'Apeirian7');
    cy.get('tbody > tr:nth-child(9) > td:nth-child(2)').should('contain.text', 'Apeirian8');
    cy.get('tbody > tr:nth-child(10) > td:nth-child(2)').should('contain.text', 'Apeirian9');
    
    cy.get('tbody > tr:nth-child(1) > td:nth-child(3)').should('contain.text', 'Adipisci0');
    cy.get('tbody > tr:nth-child(2) > td:nth-child(3)').should('contain.text', 'Adipisci1');
    cy.get('tbody > tr:nth-child(3) > td:nth-child(3)').should('contain.text', 'Adipisci2');
    cy.get('tbody > tr:nth-child(4) > td:nth-child(3)').should('contain.text', 'Adipisci3');
    cy.get('tbody > tr:nth-child(5) > td:nth-child(3)').should('contain.text', 'Adipisci4');
    cy.get('tbody > tr:nth-child(6) > td:nth-child(3)').should('contain.text', 'Adipisci5');
    cy.get('tbody > tr:nth-child(7) > td:nth-child(3)').should('contain.text', 'Adipisci6');
    cy.get('tbody > tr:nth-child(8) > td:nth-child(3)').should('contain.text', 'Adipisci7');
    cy.get('tbody > tr:nth-child(9) > td:nth-child(3)').should('contain.text', 'Adipisci8');
    cy.get('tbody > tr:nth-child(10) > td:nth-child(3)').should('contain.text', 'Adipisci9');
    
    cy.get('tbody > tr:nth-child(1) > td:nth-child(4)').should('contain.text', 'Definiebas0');
    cy.get('tbody > tr:nth-child(2) > td:nth-child(4)').should('contain.text', 'Definiebas1');
    cy.get('tbody > tr:nth-child(3) > td:nth-child(4)').should('contain.text', 'Definiebas2');
    cy.get('tbody > tr:nth-child(4) > td:nth-child(4)').should('contain.text', 'Definiebas3');
    cy.get('tbody > tr:nth-child(5) > td:nth-child(4)').should('contain.text', 'Definiebas4');
    cy.get('tbody > tr:nth-child(6) > td:nth-child(4)').should('contain.text', 'Definiebas5');
    cy.get('tbody > tr:nth-child(7) > td:nth-child(4)').should('contain.text', 'Definiebas6');
    cy.get('tbody > tr:nth-child(8) > td:nth-child(4)').should('contain.text', 'Definiebas7');
    cy.get('tbody > tr:nth-child(9) > td:nth-child(4)').should('contain.text', 'Definiebas8');
    cy.get('tbody > tr:nth-child(10) > td:nth-child(4)').should('contain.text', 'Definiebas9');
    
    cy.get('tbody > tr:nth-child(1) > td:nth-child(5)').should('contain.text', 'Consequuntur0');
    cy.get('tbody > tr:nth-child(2) > td:nth-child(5)').should('contain.text', 'Consequuntur1');
    cy.get('tbody > tr:nth-child(3) > td:nth-child(5)').should('contain.text', 'Consequuntur2');
    cy.get('tbody > tr:nth-child(4) > td:nth-child(5)').should('contain.text', 'Consequuntur3');
    cy.get('tbody > tr:nth-child(5) > td:nth-child(5)').should('contain.text', 'Consequuntur4');
    cy.get('tbody > tr:nth-child(6) > td:nth-child(5)').should('contain.text', 'Consequuntur5');
    cy.get('tbody > tr:nth-child(7) > td:nth-child(5)').should('contain.text', 'Consequuntur6');
    cy.get('tbody > tr:nth-child(8) > td:nth-child(5)').should('contain.text', 'Consequuntur7');
    cy.get('tbody > tr:nth-child(9) > td:nth-child(5)').should('contain.text', 'Consequuntur8');
    cy.get('tbody > tr:nth-child(10) > td:nth-child(5)').should('contain.text', 'Consequuntur9');
    
    cy.get('tbody > tr:nth-child(1) > td:nth-child(6)').should('contain.text', 'Phaedrum0');
    cy.get('tbody > tr:nth-child(2) > td:nth-child(6)').should('contain.text', 'Phaedrum1');
    cy.get('tbody > tr:nth-child(3) > td:nth-child(6)').should('contain.text', 'Phaedrum2');
    cy.get('tbody > tr:nth-child(4) > td:nth-child(6)').should('contain.text', 'Phaedrum3');
    cy.get('tbody > tr:nth-child(5) > td:nth-child(6)').should('contain.text', 'Phaedrum4');
    cy.get('tbody > tr:nth-child(6) > td:nth-child(6)').should('contain.text', 'Phaedrum5');
    cy.get('tbody > tr:nth-child(7) > td:nth-child(6)').should('contain.text', 'Phaedrum6');
    cy.get('tbody > tr:nth-child(8) > td:nth-child(6)').should('contain.text', 'Phaedrum7');
    cy.get('tbody > tr:nth-child(9) > td:nth-child(6)').should('contain.text', 'Phaedrum8');
    cy.get('tbody > tr:nth-child(10) > td:nth-child(6)').should('contain.text', 'Phaedrum9');
    
    cy.get('tbody > tr:nth-child(1) > td:nth-child(7)').should('contain.text', 'edit').and('contain.text', 'delete');
    cy.get('tbody > tr:nth-child(2) > td:nth-child(7)').should('contain.text', 'edit').and('contain.text', 'delete');
    cy.get('tbody > tr:nth-child(3) > td:nth-child(7)').should('contain.text', 'edit').and('contain.text', 'delete');
    cy.get('tbody > tr:nth-child(4) > td:nth-child(7)').should('contain.text', 'edit').and('contain.text', 'delete');
    cy.get('tbody > tr:nth-child(5) > td:nth-child(7)').should('contain.text', 'edit').and('contain.text', 'delete');
    cy.get('tbody > tr:nth-child(6) > td:nth-child(7)').should('contain.text', 'edit').and('contain.text', 'delete');
    cy.get('tbody > tr:nth-child(7) > td:nth-child(7)').should('contain.text', 'edit').and('contain.text', 'delete');
    cy.get('tbody > tr:nth-child(8) > td:nth-child(7)').should('contain.text', 'edit').and('contain.text', 'delete');
    cy.get('tbody > tr:nth-child(9) > td:nth-child(7)').should('contain.text', 'edit').and('contain.text', 'delete');
    cy.get('tbody > tr:nth-child(10) > td:nth-child(7)').should('contain.text', 'edit').and('contain.text', 'delete');
  })
})