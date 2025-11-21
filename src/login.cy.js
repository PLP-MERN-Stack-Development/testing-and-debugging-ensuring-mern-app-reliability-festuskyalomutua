describe('Login flow', () => {
  it('logs in successfully', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[name=username]').type('testuser');
    cy.get('input[name=password]').type('password');
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/dashboard');
  });
});
