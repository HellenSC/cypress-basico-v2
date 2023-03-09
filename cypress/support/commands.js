Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Hellen')
        cy.get('#lastName').type('Castro')
        cy.get('#email').type('hellenscastro23@gmail.com')
        cy.get('#open-text-area').type('test')
        //cy.get('button[type="submit"]').click()
        cy.contains('button', 'Enviar').click()
})