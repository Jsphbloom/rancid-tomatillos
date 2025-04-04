import './MovieDetails.css';
import home from '../icons/home.png'

function MovieDetails({ movieDetails, goHome }) {
  return (
    <section className='MovieDetails'>
      <img src={movieDetails.backdrop_path} />
      <p>{movieDetails.title}</p>
      <p>{movieDetails.genre_ids.join(', ')}</p>
      <p>{movieDetails.overview}</p>
      <button onClick={goHome}>
        <img src={home} />
      </button>
    </section>
  );
}

export default MovieDetails;