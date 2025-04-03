import './MoviePoster.css';

function MoviePoster({poster_path, title, vote_count, id, upVoteMovie, downVoteMovie}) {
  return (
    <section className='MoviePoster'>
      <img src={poster_path} alt={title} />
      <button onClick={() => upVoteMovie(id)}>Upvote</button>
      <p>{vote_count}</p>
      <button onClick={() => downVoteMovie(id)}>Down Vote</button>
    </section>
  );
}

export default MoviePoster;