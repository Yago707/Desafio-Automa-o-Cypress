 describe('Orange HRM Test', () => {
    it.only('Login com sucesso', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); 
      cy.get("input[name='username']", { timeout: 30000 }).should('be.visible').type("Admin"); 
      cy.get("[name='password']").should('be.visible').type("admin123"); 
      cy.get(".oxd-button").should('be.visible').click(); 
      cy.location("pathname", { timeout: 30000 }).should('eq', '/web/index.php/dashboard/index'); 
      cy.get(".oxd-topbar-header-breadcrumb-module").should('contain.text', "Dashboard");
      cy.get(':nth-child(6) > .oxd-main-menu-item').click()
      cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
      cy.get('.oxd-select-dropdown > :nth-child(3)').click()
      
    });
  });

  it('Login - Falha', () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");  // Visitar a página de login
  cy.get("input[name='username']").should('be.visible').type("Test"); // Digitar um nome de usuário incorreto e verificar se o campo está visível
  cy.get("[name='password']").should('be.visible').type("Test");  // Digitar uma senha incorreta e verificar se o campo está visível
  cy.get("button[type='submit']").should('be.visible').click(); // Clicar no botão de login e verificar se está visível
  cy.get('.oxd-alert').should('be.visible'); // Verificar se a mensagem de alerta está visível
  });
