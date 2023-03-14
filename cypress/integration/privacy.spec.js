Cypress._.times(3, function(){    //executa 3x
    it('Testa a página da política de privacidade de forma independente', function(){
        cy.visit('./src/privacy.html')
    })

    it('Acessa a página da política de privacidade removendo o target e então clicando no link', function(){
        cy.contains('CAC TAT - Política de privacidade').should('be.visible')
    })
})