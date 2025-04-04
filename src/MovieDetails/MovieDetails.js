import './MovieDetails.css';

function MovieDetails({ movieDetails }) {
  return (
    <section className='MovieDetails'>
      <img src={movieDetails.backdrop_path} />
      <p>{movieDetails.title}</p>
      <p>{movieDetails.overview}</p>
    </section>
  );
}

export default MovieDetails;