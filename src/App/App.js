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
  .then(data => setMovies([...movies, ...data]))
  .catch(error => setError(error.message))
}


useEffect(() => {
  getMovies();
}, [])





  const handleSelectMovie = (movie) => {
    console.log("Movie selected:", movie);
    setSelectedMovie(movie)
  }

  function goHome(){
    setSelectedMovie(null)
  }

  function upVoteMovie(id) {
    const updatedMovie = movies.map(movie => {
      if (movie.id === id) {
        return { ...movie, vote_count: movie.vote_count + 1 };
      }
      return movie
    })
    setMovies(updatedMovie)
  }

  function downVoteMovie(id) {
    const updatedMovie = movies.map(movie => {
      if (movie.id === id) {
        return { ...movie, vote_count: movie.vote_count - 1 };
      }
      return movie
    })
    setMovies(updatedMovie)
  }

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>

      {selectedMovie ? (
        <MovieDetails goHome={goHome}/>
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

