import './MovieDetails.css';
import home from '../icons/home.png'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';


function MovieDetails() {
  const [movie, setMovie] = useState([])
  const [error, setError] = useState('')
  const { id } = useParams()

  

  const handleSelectMovie = (id) => {
    fetch(`https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/${id}`)
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
        <Link to="/">
          <button className='home'>
            <img src={home} alt="home" />
          </button>
        </Link>
        <p className='title'>{movie.title}</p>
      <section className='detailsSection'>
        <img src={movie.backdrop_path} alt={movie.title}/>
        <p className='genres'>{movie.genre_ids?.join(', ')}</p>
        <p className='overview'>{movie.overview}</p>
      </section>
    </section>
  );
}

export default MovieDetails;