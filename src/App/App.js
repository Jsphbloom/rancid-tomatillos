import './App.css';
import searchIcon from '../icons/search.png';


import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
// import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {
  const [movies, setMovies] = useState(moviePosters)


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
      <MoviesContainer movies={movies} upVoteMovie={upVoteMovie} downVoteMovie={downVoteMovie} />
    </main>
  );
}

export default App;

