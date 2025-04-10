describe('error handling', () => {
    it('errors out when invalid params are submitted', () =>{
    cy.visit("http://localhost:3000/banana")

    cy.get('h2').contains('404 - Page Not Found')
    })
})