import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [fact, setFact] = useState()
  const [image, setImage] = useState()
  const CAT_END_POINT_RANDOM_FACT = 'https://catfact.ninja/fact'
  const CAT_END_POINT_PREFIX = 'https://cataas.com'

  useEffect(() => { //recuperar cita al cargar pagina
    fetch(CAT_END_POINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => { //recuperar imagen a traves de la primera palabra de la cita
    if (fact) {
      const firstWord = fact.split(' ')[0]//si son las 3 primeras  .slice(0, 3).join(' ')
      const CAT_END_POINT_IMG = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

      fetch(CAT_END_POINT_IMG)
        .then(res => res.json())
        .then(response => {
          console.log(response)
          const { url } = response
          setImage(url)
        })
    }
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {image && <img src={`${CAT_END_POINT_PREFIX}${image}`} alt={`imagen extraida usando la primera palabra de ${fact}`} />}
    </main>
  )
}

export default App
