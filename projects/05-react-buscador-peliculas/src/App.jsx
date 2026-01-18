import { useState, useEffect, useRef } from 'react'
import './App.css'
import { Movies } from './components/Movies' 
import { useMovies } from './hooks/useMovies'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Ingrese un título para buscar')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  function handleSubmit (event) {
    event.preventDefault();
    getMovies()
  }

  function handleChange (event) {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    updateSearch(newQuery)    
  }

  const handleSort = () => {
    setSort(!sort);
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de películas</h1>
        <form className='form' action="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' type="text" placeholder='Avengers, Avatar, Little Manhattan'/>
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red', textAlign: 'center' }} >{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>

    </div>
  )
}

export default App
