import './MoviePoster.css';
import { Link } from 'react-router-dom';
import downVoteArrow from '../icons/downvote.png'
import upVoteArrow from '../icons/upvote.png'

function MoviePoster({poster_path, title, vote_count, id, upVoteMovie, downVoteMovie}) {
  return (
    <section className='MoviePoster'>
      <Link to={`/movies/${id}`}>
        <img src={poster_path} alt={title}/>
      </Link>

      <section className='VoteCount'>

        <button onClick={() => upVoteMovie(id)}>
          <img src={upVoteArrow} alt="upVote"/>
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