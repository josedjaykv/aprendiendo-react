import { useState } from 'react'
import confetti from "canvas-confetti"
import './App.css'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { Board } from './components/Board'

function App() {
  // Estados
  const [board, setBoard] = useState(Array(9).fill(null))  // Estado para saber en que estado esta cada cuadro del tablero
  const [turn, setTurn] = useState(TURNS.X)  // Estado para saber en que turno estamos
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }

  const updateBoard = (index) => {
    // No actualizamos esta posicion si ya tiene algo
    if (board[index] || winner) return; 

    // Actualizar el Tablero
    const newBoard = [...board]; // No se modifica el array(board), se crea uno nuevo ya que los estados deben ser inmutables
    newBoard[index] = turn; // Puede ser x u o
    setBoard(newBoard)

    // Cambiar de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner){
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)){
      setWinner(false);
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <Board board={board} updateBoard={updateBoard} />
      
      <sectiofn className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </sectiofn>

      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  ) 
}

export default App
