import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
// Revisamos todas las combinaciones ganadoras
for (const combo of WINNER_COMBOS) {
    const [a,b,c] = combo;
    if (
    boardToCheck[a] &&
    boardToCheck[a] === boardToCheck[b] &&
    boardToCheck[a] === boardToCheck[c]
    ){
    return boardToCheck[a];
    }
}
// si no hay ganador
return null;
} 

export const checkEndGame = (newBoard) => {
    // Revisamos si hay un empate
    // si no hay mas espacios vacios
    // en el tablero

    // newBoard = ['x', 'o', 'x', null, null, null, 'o']
    return newBoard.every((square) => square !== null);
  }