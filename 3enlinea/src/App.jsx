import { useState } from "react"
import { ListBoard } from './components/listBoard';
import { WINNER_COMBOS } from './constants'
import './App.css'

function App() {
  const [winner, setWinner] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  function toogleVisible(){
    setIsVisible(!isVisible);
  }

  function checkWinner(boardToCheck) {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a];
      }
    }
    return null;
  }

  return (

    <ListBoard
      className='list'
      checkWinner={checkWinner}
      winner={winner}
      setWinner={setWinner}
      toogleVisible={toogleVisible}
      isVisible={isVisible}
    />
  )
}

export default App
