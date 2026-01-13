import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies: mappedMovies } = useMovies()
  const [query, setQuery] = useState('')

  function handleSubmit (event) {
    event.preventDefault();
    console.log(query);
  }

  function handleChange (event) {
    setQuery(event.target.value)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de películas</h1>
        <form className='form' action="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' type="text" placeholder='Avengers, Avatar, Little Manhattan'/>
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
