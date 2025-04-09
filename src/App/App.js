import './App.css';
import MovieDetails from '../MovieDetails/MovieDetails'
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
  getMovies();
    }, [])

function getMovies() {
  fetch('https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies')
  .then(response => response.json())
  .then(data => setMovies(data.movies))
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

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      
      <Routes>
        <Route path="/" element={<MoviesContainer movies={movies} upVoteMovie={upVoteMovie} downVoteMovie={downVoteMovie}/>}/>
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>

    </main>
  );
}

export default App;

