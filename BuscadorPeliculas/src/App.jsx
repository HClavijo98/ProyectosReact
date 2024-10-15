import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'

// https://www.omdbapi.com/
// http://www.omdbapi.com/?apikey=[yourkey]&

export function App () {
  const { movies } = useMovies()
  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input type='text' placeholder='Matrix, Avengers, Starwars ...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}
