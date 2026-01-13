import './App.css'
import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'

function App() {
  const movies = responseMovies.Search
  const hasMovies = responseMovies.Response
  console.log(hasMovies)

  const renderMovies = () => {
    return (
      <ul>
        {
          movies.map(movie => (
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
            </li>
          ))
        }
      </ul>
    )
  }

  const renderNoResult = () => {
    return (
      <p>No se encontraron películas para esta búsqueda</p>
    )
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de películas</h1>
        <form className='form' action="form">
          <input type="text" placeholder='Avengers, Avatar, Little Manhattan'/>
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        {
          hasMovies ? renderMovies() : renderNoResult()
        }
      </main>

    </div>
  )
}

export default App
