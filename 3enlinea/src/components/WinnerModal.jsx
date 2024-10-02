import Square from "./Square";

function WinnerModal({ winner, resetGame, addBoard, toogleVisible, isVisible }) {
  if (winner == null) return null;

  const winnerText = winner == false ? 'Empate' : 'Gana';

  return (
    <div>
    {isVisible && (
    <section className="winner">
          <div className="text">
            <h2>{winnerText}</h2>
            {winner !== false && (
              <header className="win">
                <Square>{winner}</Square>
              </header>
            )}

            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
              {/* Mostrar el botón adicional solo en caso de empate */}
              {winner === false && (
                <button onClick={() => {
                  addBoard();
                  toogleVisible();
                }}>
                  Agregar Tablero
                </button>
              )}
            </footer>
          </div>
          </section>
        )}
        </div>
  )
}
export default WinnerModal