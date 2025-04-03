import './MoviePoster.css';

function MoviePoster({poster_path, title, vote_count, id}) {
  return (
    <section className='MoviePoster'>
      <img src={poster_path} />
      <p>"vote count. "{vote_count}</p>
    </section>
  );
}

export default MoviePoster;