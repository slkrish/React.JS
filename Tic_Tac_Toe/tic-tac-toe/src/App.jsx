import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/winning_combinations";
import GameOver from "./components/GameOver";

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  const [playerOneName, setPlayerOneName] = useState('Player One');
  const [playerTwoName, setPlayerTwoName] = useState('Player Two');

  function handlePlayerOneName(updatedFirstName) {
    setPlayerOneName(updatedFirstName);
  }
  function handlePlayerTwoName(updatedSecondName) {
    setPlayerTwoName(updatedSecondName);
  }
  //let gameBoard = intialGameBoard;
  let gameBoard = [...intialGameBoard.map(array => [...array])];
  if (gameTurns.length > 0) {

    for (const turn of gameTurns) {
      gameBoard[turn.rowIndex][turn.colIndex] = turn.activePlayer;
    }

  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firsSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firsSquareSymbol && firsSquareSymbol === secondSquareSymbol && firsSquareSymbol === thirdSquareSymbol) {
      winner = firsSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleRestart() {
    setGameTurns([]);
  }

  function handleSquare(rowIndex, colIndex) {
    setActivePlayer((curActivPlayer) => curActivPlayer === 'X' ? 'O' : 'X'); //Ternary expression
    setGameTurns((prevTurns) => {
      const updatedTurns = [{ rowIndex, colIndex, activePlayer }, ...prevTurns]
      return updatedTurns;
    });
  }
  console.log(playerOneName);
  return (
    <menu >
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={playerOneName} symbol="X" isActive={activePlayer === 'X'} handlePlayer={handlePlayerOneName} />
          <Player name={playerTwoName} symbol="O" isActive={activePlayer === 'O'} handlePlayer={handlePlayerTwoName}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner==='X' ? playerOneName : winner ==='O' ? playerTwoName : null} rematch={handleRestart} />}
        <GameBoard onSelectSquare={handleSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </menu>
  )
  
}

export default App

