/// <reference types="Cypress" />
import 'cypress-wait-until';

describe('Completes tests on elements at https://the-internet.herokuapp.com/disappearing_elements', () => {
  it('Passes if the page exists', () => {
    cy.visit('https://the-internet.herokuapp.com/disappearing_elements');
  });

  it('Reloads page until the missing element appears', () => {
    cy.visit('https://the-internet.herokuapp.com/disappearing_elements');

    cy.waitUntil(() => {
      if (Cypress.$('#content > div > ul > li').length != 5) {
        return cy.visit('https://the-internet.herokuapp.com/disappearing_elements').then(() => false);
      } else {
        return true;
      }
    });
    
    cy.get('#content > div > ul > li:nth-child(5)');
  });
})