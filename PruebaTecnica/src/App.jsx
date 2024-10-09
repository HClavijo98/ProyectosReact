import { useCatImage } from "./hooks/useCatImage.js"
import { useCatFact } from './hooks/useCatFact.js'
import './App.css'

function App() {
  const { fact, refreshFact } = useCatFact()
  const { image } = useCatImage({ fact }) // uso de custom hook  

  function handleClick() {
    refreshFact()
  }
 
  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {image && <img src={image} alt={`imagen extraida usando la primera palabra de ${fact}`} />}
    </main>
  )
}

export default App
