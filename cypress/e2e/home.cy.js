describe('home page', () => {
    it('app deve estar online', () => {
        cy.viewport(1440,900) //defini tamanho da janela
        cy.visit('https://buger-eats.vercel.app') //acessar a url alvo do meu teste
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats') //busca o elemento que possui o slogan da página. Should = validar
    })
})