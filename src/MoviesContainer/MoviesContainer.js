import MoviePoster from '../MoviePoster/MoviePoster'
import './MoviesContainer.css';

function Movies({ movies }) {

  const moviePosters = movies.map( movie => {
    return (
      <MoviePoster
        poster_path={movie.poster_path}
        title={movie.title}
        vote_count={movie.vote_count}
        id={movie.id}
        key={movie.id}
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