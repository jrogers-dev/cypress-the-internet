describe('Completes tests on elements at https://the-internet.herokuapp.com/basic_auth', () => {
  it('Passes if the page exists, does not attempt to authenticate', () => {
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {failOnStatusCode: false});
  });

  it('Passes login by appending the username and password in URL', function () {
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    cy.get('p').should('contain.text', 'Congratulations! You must have the proper credentials.')
  });

  it('Passes login by appending an authorization header', function () {
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
        headers: {
            authorization: 'Basic YWRtaW46YWRtaW4='
        },
        failOnStatusCode: false
    })
    cy.get('p').should('contain.text', 'Congratulations! You must have the proper credentials.')
  });
})