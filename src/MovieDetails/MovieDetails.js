import './MovieDetails.css';

function MovieDetails({ movieDetails, goHome }) {
  return (
    <section className='MovieDetails'>
      <img src={movieDetails.backdrop_path} />
      <p>{movieDetails.title}</p>
      <p>{movieDetails.overview}</p>
      <button onClick={goHome}>Go Home</button>
    </section>
  );
}

export default MovieDetails;