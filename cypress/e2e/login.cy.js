describe('Login Functionality Tests with Screenshots', () => {
  const baseUrl = 'https://practice.expandtesting.com/login';

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.screenshot('01-visit-login-page'); // 📸 Initial page load
  });

  it('TC001 - Valid login with correct credentials', () => {
    cy.get('#username').type('practice');
    cy.get('#password').type('SuperSecretPassword!');
    cy.screenshot('02-enter-valid-credentials'); // 📸 Inputs filled

    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/secure');
    cy.contains('You logged into a secure area!').should('be.visible');
    cy.screenshot('03-valid-login-success'); // 📸 Success page
  });

  it('TC002 - Login with invalid password', () => {
    cy.get('#username').type('practice');
    cy.get('#password').type('WrongPassword');
    cy.screenshot('04-invalid-password'); // 📸 Inputs before submit

    cy.get('button[type="submit"]').click();
    cy.contains('Your password is invalid!').should('be.visible');
    cy.screenshot('05-error-invalid-password'); // 📸 Error message
  });

  it('TC003 - Login with empty email', () => {
    cy.get('#password').type('SuperSecretPassword!');
    cy.screenshot('06-empty-username'); // 📸 Before login

    cy.get('button[type="submit"]').click();
    cy.contains('Your username is invalid!').should('be.visible');
    cy.screenshot('07-error-empty-username'); // 📸 Error message
  });

  it('TC004 - Login with invalid email format', () => {
    cy.get('#username').type('user@com');
    cy.get('#password').type('SuperSecretPassword!');
    cy.screenshot('08-invalid-email-format'); // 📸 Before login

    cy.get('button[type="submit"]').click();
    cy.contains('Your username is invalid!').should('be.visible');
    cy.screenshot('09-error-invalid-email-format'); // 📸 Error message
  });

//   it('TC005 - Forgot Password flow (simulated)', () => {
//     cy.contains('Forgot Password').click();
//     cy.screenshot('10-forgot-password-clicked'); // 📸 Placeholder — if flow exists
//   });
});
