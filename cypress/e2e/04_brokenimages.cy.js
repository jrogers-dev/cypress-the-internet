/// <reference types="Cypress" />

describe('Completes tests on elements at https://the-internet.herokuapp.com/broken_images', () => {
  it('Passes if the page exists', () => {
    cy.visit('https://the-internet.herokuapp.com/broken_images');
  });

  it('Passes if the first image is working', () => {
    cy.visit('https://the-internet.herokuapp.com/broken_images');
    cy.get('[src="asdf.jpg"]').then( ($el) => {
      expect($el[0].naturalWidth).to.be.greaterThan(0);
      expect($el[0].naturalHeight).to.be.greaterThan(0);
    });
  });

  it('Passes if the second image is working', () => {
    cy.visit('https://the-internet.herokuapp.com/broken_images');
    cy.get('[src="hjkl.jpg"]').then( ($el) => {
      expect($el[0].naturalWidth).to.be.greaterThan(0);
      expect($el[0].naturalHeight).to.be.greaterThan(0);
    });
  });

  it('Passes if the third image is working', () => {
    cy.visit('https://the-internet.herokuapp.com/broken_images');
    cy.get('[src="img/avatar-blank.jpg"]').then( ($el) => {
      expect($el[0].naturalWidth).to.be.greaterThan(0);
      expect($el[0].naturalHeight).to.be.greaterThan(0);
    });
  });
})