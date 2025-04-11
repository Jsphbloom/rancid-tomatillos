beforeEach(() => {
    cy.intercept("GET", 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies', {
        statusCode: 200,
        fixture: "movie_posters"
    })
    .visit("https://rancid-tomatillos-5sma.onrender.com")

    cy.intercept("GET", 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/155', {
        statusCode: 201,
        fixture: "movie_details"
    })
    
    cy.get('.MoviePoster').first().click()
  });

describe('Movie Details page', () => {
    it('displays movie details when a poster is clicked', () => {
  
      cy.get('h1')
      .contains('Rancid Tomatillos')
  
      cy.get('p').eq(0).should('contain', 'The Dark Knight');
      cy.get('p').eq(1).should('contain', 'Drama, Action, Crime, Thriller')
      cy.get('p').eq(2).should('contain', 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.')
    })

    it('returns home when home button is clicked from details page', () => {
        cy.intercept("GET", 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies', {
        statusCode: 200,
        fixture: "movie_posters"
    })
  
      cy.get('p').eq(0).should('contain', 'The Dark Knight');
      cy.get('p').eq(1).should('contain', 'Drama, Action, Crime, Thriller')
      cy.get('button > img').first().click()
  
      cy.get('.MoviesContainer')
      .find('.MoviePoster').should("have.length", 4)
    })
  })