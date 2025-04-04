import './MoviePoster.css';
import downVoteArrow from '../icons/downvote.png'
import upVoteArrow from '../icons/upvote.png'

function MoviePoster({poster_path, title, vote_count, id, upVoteMovie, downVoteMovie, onSelect}) {
  return (
    <section className='MoviePoster'>
      <img src={poster_path} alt={title} onClick={onSelect}/>
      <section className='VoteCount'>

        <button onClick={() => upVoteMovie(id)}>
          <img src={upVoteArrow} alt="downVote"/>
        </button>

          <p>{vote_count}</p>

        <button onClick={() => downVoteMovie(id)}>
          <img src={downVoteArrow} alt="downVote"/>
        </button>
        
      </section>
    </section>
  );
}

export default MoviePoster;