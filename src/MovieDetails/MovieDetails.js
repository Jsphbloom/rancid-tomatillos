import './MovieDetails.css';
import home from '../icons/home.png'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

function MovieDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [error, setError] = useState('')

  const handleSelectMovie = (movie) => {
    fetch(`https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/${movie.id}`)
    .then(response => response.json())
    .then(data => setMovie(data))
      .catch(error => setError(error.message))
  }

  useEffect(() => {
    handleSelectMovie(id);
  }, [id])

  if (error) return <p>{error}</p>;

  return (
    <section className='MovieDetails'>
      <img src={movie.backdrop_path} alt=''/>
        <p>{movie.title}</p>
        <p>{movie.genre_ids.join(', ')}</p>
        <p>{movie.overview}</p>
        <Link to="/">
          <button>
            <img src={home} alt="home" />
          </button>
        </Link>
    </section>
  );
}

export default MovieDetails;