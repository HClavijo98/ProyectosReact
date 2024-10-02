import { useState } from 'react'
import Square from './Square'
import WinnerModal from './WinnerModal'
import { TURNS } from '../constants'
import confetti from 'canvas-confetti'

export function Board({ resetGame, turn, setTurn, winner, setWinner, checkWinner, addBoard, toogleVisible, isVisible }) {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  function checkEndGame(newBoard) {
    return newBoard.every((square) => square != null);
  }

  function updateBoard(index) {
    if (board[index] || winner) return
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', newTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      toogleVisible();
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      toogleVisible();
      setWinner(false);
    }
  }

  function reset() {
    const newBoard = Array(9).fill(null);
    setBoard(newBoard);
    resetGame();
  }

  return (
    <div className='board'>
      <button onClick={reset}>Empezar de nuevo</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard} isSelected={square != null}>
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal
        winner={winner}
        resetGame={reset}
        addBoard={addBoard}
        toogleVisible={toogleVisible}
        isVisible={isVisible}
      />
    </div>)
}