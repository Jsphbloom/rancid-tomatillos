import './MoviePoster.css';

function MoviePoster({poster_path, title, vote_count, id, upVoteMovie}) {
  return (
    <section className='MoviePoster'>
      <img src={poster_path} />
      <button onClick={() => upVoteMovie(id)}>Upvote</button>
      <p>{vote_count}</p>
      <button>Down Vote</button>
    </section>
  );
}

export default MoviePoster;