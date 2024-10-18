import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'
import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'

// https://www.omdbapi.com/
// http://www.omdbapi.com/?apikey=[yourkey]&

export function App () {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })
  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies(search)
    }, 500)
    , [getMovies])

  function handleSubmit (event) {
    event.preventDefault()
    getMovies(search)
  }

  function handleSort () {
    setSort(!sort)
  }

  function handleChange (event) {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            value={search} onChange={handleChange} type='text' placeholder='Matrix, Avengers, Starwars ...'
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>Cargando ...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}
