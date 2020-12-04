describe('My First Test', () => {
  beforeEach(() => {
    cy.visit("localhost:4200");
  })

  it('should switch from welcome to monitor', () => {
    cy.visit("localhost:4200");
    cy.url().should('include', '/welcome');
    cy.get('.hello-text').contains('Hello');

    cy.get('#dashboard')
    cy.contains('Monitor').click();
    cy.url().should('include', '/monitor');
    cy.get('.monitor-text').contains('monitor works!');
  })

  it('should open basic form and enter/submit text', () => {
    cy.get('#form-menu');
    cy.contains('Basic Form').click();
    cy.url().should('include', '/basicform');
    let name = 'Jonas';
    let message = 'Hello, world!'
    cy.get('#name').type(name);
    cy.get('#message').type(message);
    cy.get('.-button').click();
    cy.get('#result').contains(name + ' says: ' + message);
  })
})
