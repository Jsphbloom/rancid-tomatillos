import './App.css';
import searchIcon from '../icons/search.png';
import MovieDetails from '../MovieDetails/MovieDetails'



import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {
  const [movies, setMovies] = useState(moviePosters)
  const [selectedMovie, setSelectedMovie] = useState(null);

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
        <MovieDetails movieDetails={movieDetails} goHome={goHome}/>
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

