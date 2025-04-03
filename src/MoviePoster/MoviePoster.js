import './MoviePoster.css';
import downVoteArrow from '../icons/downvote.png'
import upVoteArrow from '../icons/upvote.png'

function MoviePoster({poster_path, title, vote_count, id, upVoteMovie, downVoteMovie}) {
  return (
    <section className='MoviePoster'>
      <img src={poster_path} alt={title} />
      
      <button onClick={() => upVoteMovie(id)}>
        <img src={upVoteArrow} alt="Downvote"/>
      </button>

      <p>{vote_count}</p>

      <button onClick={() => downVoteMovie(id)}>
        <img src={downVoteArrow} alt="Downvote"/>
      </button>
    </section>
  );
}

export default MoviePoster;