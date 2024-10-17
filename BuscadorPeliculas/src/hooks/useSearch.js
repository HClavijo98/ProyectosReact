import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) { // evitar la validacion de input vacio al cargar la pagina
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar una pelicula sin titulo.')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No puedes escribir solo numeros.')
      return
    }
    if (search.length < 3) {
      setError('Debes escribir mas de 3 letras.')
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}
