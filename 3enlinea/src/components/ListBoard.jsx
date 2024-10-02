import { Board } from "./Board";
import '../index.css'
import { useState } from 'react'
import { TURNS } from '../constants'
import confetti from 'canvas-confetti'

export function ListBoard({ checkWinner, winner, setWinner, toogleVisible, isVisible }) {
    const [board, setBoard] = useState(() => {
        const boardFromStorage = window.localStorage.getItem('board')
        return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
    })
    const [boards, setBoards] = useState([board]);
    const [turn, setTurn] = useState(() => {
        const turnFromStorage = window.localStorage.getItem('turn')
        return turnFromStorage ?? TURNS.X
    })

    function addBoard() {
        window.localStorage.removeItem('board');
        const newBoard = Array(9).fill(null);
        setBoard(newBoard);
        setBoards([...boards, newBoard]);
    }

    function resetGame() {
        window.localStorage.removeItem('board');
        window.localStorage.removeItem('turn');
        const newBoard = Array(9).fill(null);
        setBoard(newBoard);
        setBoards([Board]);
        setTurn(TURNS.X);
        setWinner(null);
        toogleVisible();
    }

    function checkEndGame(newBoard) {
        return newBoard.every((square) => square != null);
    }
    
      function updateBoard(index) {
        if (board[index] || winner) return; // Si ya hay una marca o hay un ganador, no hagas nada
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard); // Actualiza el estado del tablero

        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);

        window.localStorage.setItem('board', JSON.stringify(newBoard));
        window.localStorage.setItem('turn', newTurn);

        const newWinner = checkWinner(newBoard);
        if (newWinner) {
          toogleVisible();
          confetti();
          setWinner(newWinner);
        } else if (newBoard.every((square) => square != null)) {
          toogleVisible();
          setWinner(false); // Empate
        }
      }

    return (
        <div>
            <h1>3 en linea</h1>
            {
                boards.map((board, index) => (
                    <Board
                        key={index}
                        //board={board}
                        setBoard={setBoard}
                        updateBoard={updateBoard}
                        turn={turn}
                        setTurn={setTurn}
                        resetGame={resetGame}
                        winner={winner}
                        setWinner={setWinner}
                        checkWinner={checkWinner}
                        addBoard={addBoard}
                        toogleVisible={toogleVisible}
                        isVisible={isVisible}
                    />
                ))
            }
        </div>
    )
}