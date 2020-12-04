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
    cy.get('.basic-form')
      .find('[formcontrolname="name"]').type(name)
      .should('contain', name)
    cy.get('.basic-form')
      .find('[formcontrolname="message"]').type(message)
      .should('contain', message)
    cy.get('.basic-form').submit()
      .next().should('contain', name + ' says: ' + message)

  })
})
