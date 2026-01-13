import { useRef } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies: mappedMovies } = useMovies()

  function handleSubmit (event) {
    event.preventDefault();
    const { movieName } = Object.fromEntries(
      new window.FormData(event.target)
    )
    console.log(movieName);
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de películas</h1>
        <form className='form' action="form" onSubmit={handleSubmit}>
          <input name='movieName' type="text" placeholder='Avengers, Avatar, Little Manhattan'/>
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>

    </div>
  )
}

export default App
