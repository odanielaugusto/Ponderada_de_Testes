describe('Testando a página Professional Details', () => {
    beforeEach(() => {
      // Abre a página antes de cada teste
      cy.visit('/professionals/details');
    });
  
    it('Deve carregar a página e exibir o título correto', () => {
      // Verifica se o título da página está visível
      cy.contains('professional-details works!').should('be.visible');
    });
  
    it('Deve exibir um botão de edição e permitir o clique', () => {
      // Clica no botão de editar se ele existir
      cy.get('[data-cy="edit-button"]').click();
  
      // Verifica se um modal de edição foi aberto
      cy.get('[data-cy="edit-modal"]').should('be.visible');
    });
  
    it('Deve verificar se a URL da página está correta', () => {
      // Confirma se a URL contém o caminho correto
      cy.url().should('include', '/professionals/details');
    });
  });