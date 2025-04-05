import './App.css';
import searchIcon from '../icons/search.png';
import MovieDetails from '../MovieDetails/MovieDetails'

import { useState, useEffect } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState('')

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

useEffect(() => {
  getMovies();
}, [])



  const handleSelectMovie = (movie) => {
    fetch(`https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/${movie.id}`)
    .then(response => response.json())
    .then(data => setSelectedMovie(data))
      .catch(error => setError(error.message))
  }

  function goHome(){
    setSelectedMovie(null)
  }

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>

      {selectedMovie ? (
        <MovieDetails movieDetails={selectedMovie} goHome={goHome}/>
      ) : (
        <MoviesContainer
        movies={movies} 
        upVoteMovie={upVoteMovie} 
        downVoteMovie={downVoteMovie} 
        onSelectMovie={handleSelectMovie}
        />
      )}

    </main>
  );
}

export default App;

