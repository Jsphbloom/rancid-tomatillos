import './App.css';
import searchIcon from '../icons/search.png';
import MovieDetails from '../MovieDetails/MovieDetails'



import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {
  const [movies, setMovies] = useState(moviePosters)
  const [voteCount, setVoteCount] = useState("")
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie)
  }

  function upvoteMovie(id){
    const filteredMovie= movies.filter(movie => {
      return movie.id === id
    })
    filteredMovie.vote_count += 1
    setVoteCount(filteredMovie)
  }

  function downvoteMovie(id){
    const filteredMovie= movies.filter(movie => {
      return movie.id === id
    })
    filteredMovie.vote_count -=1
    setVoteCount(filteredMovie)
  }



  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      <MoviesContainer movies={movies} vote_count = {voteCount} upvoteMovie={upvoteMovie} downvoteMovie={downvoteMovie} />
      <MovieDetails movie_details={movieDetails} />
    </main>
  );
}

export default App;

