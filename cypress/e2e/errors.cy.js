describe('error handling', () => {
    it('errors out when invalid params are submitted', () =>{
        cy.intercept("GET", 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/banana', {
            statusCode: 404,
            body: { error: "404 - Movie not found"}
          })
    cy.visit("https://rancid-tomatillos-5sma.onrender.com/movie/banana", {failOnStatusCode: false})
        cy.contains(".p").should("exist")
    })
})