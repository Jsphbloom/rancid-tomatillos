import MoviePoster from '../MoviePoster/MoviePoster'
import './MoviesContainer.css';

function Movies({ movies, upvoteMovie, downvoteMovie, vote_count, onSelectMovie }) {

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
        onSelect={onSelectMovie}
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