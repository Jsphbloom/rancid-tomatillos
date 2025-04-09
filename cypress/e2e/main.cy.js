beforeEach(() => {
  cy.intercept("GET", 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies', {
    statusCode: 200,
    fixture: "movie_posters"
  })
  .visit("https://rancid-tomatillos-5sma.onrender.com")
});

describe('Main Page', () => {
  it('displays title on page load', () => {

    cy.get('h1')
    .contains('rancid tomatillos')

    cy.get('.MoviesContainer')
      .find('.MoviePoster').should("have.length", 4)
  })

  it('individual posters can be upvoted', () => {
    cy.intercept("PATCH", 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/155', {
      statusCode: 201,
      body: {
        "id": 155,
        "poster_path": "https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "title": "The Dark Knight",
        "vote_count": 32545
      }
    })

    cy.get('.MoviePoster').first().get(':nth-child(1) > .VoteCount > p').contains('32544')
    .get('.MoviePoster').first().find('button').filter(':has(img[alt="upVote"])').click()
    .get('.MoviePoster').first().get(':nth-child(1) > .VoteCount > p').should('have.text', '32545')
  })

  it('individual posters can be downvoted', () => {
    cy.intercept("PATCH", 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/155', {
      statusCode: 201,
      body: {
        "id": 155,
        "poster_path": "https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "title": "The Dark Knight",
        "vote_count": 32543
      }
    })

    cy.get('.MoviePoster').first().get(':nth-child(1) > .VoteCount > p').contains('32544')
    .get('.MoviePoster').first().find('button').filter(':has(img[alt="downVote"])').click()
    .get('.MoviePoster').first().get(':nth-child(1) > .VoteCount > p').should('have.text', '32543')
  })

})


  
  