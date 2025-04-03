import MoviePoster from '../MoviePoster/MoviePoster'
import './MoviesContainer.css';

function Movies({ movies, upvoteMovie, downvoteMovie, vote_count }) {

  const moviePosters = movies.map( movie => {
    return (
      <MoviePoster
        poster_path={movie.poster_path}
        title={movie.title}
        vote_count={movie.vote_count}
        id={movie.id}
        key={movie.id}
        upvote={upvoteMovie}
        downvote={downvoteMovie}
      />
    )
  })

  return (
      <section className='MoviesContainer'>
        {moviePosters}
      </section>
  );
}
  
export default Movies;