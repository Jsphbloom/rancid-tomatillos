import MoviePoster from '../MoviePoster/MoviePoster'
import { useState, useEffect } from 'react';
import './MoviesContainer.css';

function MoviesContainer() {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
  getMovies();
    }, [])

function getMovies() {
  fetch('https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies')
  .then(response => response.json())
  .then(data => setMovies(data))
  .catch(error => setError(error.message))
}

function upVoteMovie(id){
fetch(`https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/${id}`, {
  method: 'PATCH',
  headers: {
  	'Content-Type': 'application/json'
  },
  body: JSON.stringify({ vote_direction: "up" }),
})
  .then(response => response.json())
  .then(updatedMovie => {
    setMovies(prevMovies =>
      prevMovies.map(movie =>
        movie.id === updatedMovie.id ? updatedMovie : movie
      )
    );
  })
  .catch(error => setError(error.message))
};

function downVoteMovie(id){
  fetch(`https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ vote_direction: "down" }),
  })
    .then(response => response.json())
    .then(updatedMovie => {
      setMovies(prevMovies =>
        prevMovies.map(movie =>
          movie.id === updatedMovie.id ? updatedMovie : movie
        )
      );
    })
    .catch(error => setError(error.message))
  };

  if (error) return <p>{error}</p>;


  const moviePosters = movies.map( movie => {
    return (
      <MoviePoster
        poster_path={movie.poster_path}
        title={movie.title}
        vote_count={movie.vote_count}
        id={movie.id}
        key={movie.id}
        upVoteMovie={upVoteMovie}
        downVoteMovie={downVoteMovie}
      />
    )
  })

  return (
      <section className='MoviesContainer'>
        {moviePosters}
      </section>
  );
}
  
export default MoviesContainer;