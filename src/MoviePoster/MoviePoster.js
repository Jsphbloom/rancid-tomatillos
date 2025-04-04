import './MoviePoster.css';
import upvoteIcon from '../icons/upvote.png';
import downvoteIcon from '../icons/downvote.png';

function MoviePoster({ poster_path, upvote, vote_count, downvote, title, id, onSelect }) {
  return (
    <section className='MoviePoster' onClick={onSelect}>
      <img src={poster_path} />
      <button onClick = { () => upvote(id)}>upvote</button>
      <p>vote count: {vote_count}</p>
      <button onClick = { () => downvote(id)}>downvote</button>

    </section>
  );
}

export default MoviePoster;