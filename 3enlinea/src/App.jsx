import { useState } from 'react'
import { ListBoard } from './components/listBoard';
import { WINNER_COMBOS } from './constants'
import './App.css'

function App() {

  // const [board, setBoard] = useState(() => {
  //   const boardFromStorage = window.localStorage.getItem('board')
  //   return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  // })
  // const [turn, setTurn] = useState(() => {
  //   const turnFromStorage = window.localStorage.getItem('turn')
  //   return turnFromStorage ?? TURNS.X
  // })
  const [winner, setWinner] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  function toogleVisible(){
    setIsVisible(!isVisible);
  }
  // function checkEndGame(newBoard){
  //   return newBoard.every((square) => square != null);
  // }

  // function updateBoard(index){
  //   if (board[index] || winner) return
  //   const newBoard = [...board];
  //   newBoard[index] = turn;
  //   setBoard(newBoard);

  //   const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
  //   setTurn(newTurn);

  //   window.localStorage.setItem('board', JSON.stringify(newBoard));
  //   window.localStorage.setItem('turn', newTurn);

  //   const newWinner = checkWinner(newBoard);
  //   if(newWinner){
  //     confetti();
  //     setWinner(newWinner);
  //   }else if(checkEndGame(newBoard)){
  //     setWinner(false);
  //   }
  // }

  function checkWinner(boardToCheck) {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a];
      }
    }
    return null;
  }

  // function resetGame(){
  //   setBoard(Array(9).fill(null));
  //   setTurn(TURNS.X);
  //   setWinner(null);
  //   window.localStorage.removeItem('board');
  //   window.localStorage.removeItem('turn');
  // }

  return (
    // <Board
    // checkWinner={checkWinner}
    // winner={winner}
    // setWinner={setWinner} 
    // />

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
