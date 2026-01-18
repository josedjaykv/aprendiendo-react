function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {
        movies?.map(movie => (
          <li className='movie' key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMovieResult () {
  return (
    <p>No se encontraron películas para esta búsqueda</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies

  return (    
    hasMovies ? <ListOfMovies movies={movies} /> : <NoMovieResult />
  )
}