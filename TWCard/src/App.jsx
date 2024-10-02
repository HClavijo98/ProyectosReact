
import './App.css'
import TwitterCard from './components/TwitterCard.jsx'

function App() {
  return (
    <div className='app'>
      <TwitterCard userName="midudev">
        <strong>Miguel Angel </strong>
        <i>desarrollador</i>
      </TwitterCard>
      <TwitterCard userName="elonmusk">
        <strong>Elon Musk </strong>
        <i>empresario</i>
      </TwitterCard>
    </div>
  )
}

export default App
