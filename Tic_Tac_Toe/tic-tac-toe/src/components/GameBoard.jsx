import { useState } from "react";

// const intialGameBoard = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ];

// export default function GameBoard({onSelectSquare, playerTurns}) 
export default function GameBoard({onSelectSquare, board}) 
{
    // let gameBoard = intialGameBoard;
    // if(playerTurns.length>0)
    // {
    //     for(const turn of playerTurns)
    //     {
    //         gameBoard[turn.rowIndex][turn.colIndex] = turn.activePlayer;
    //     }
    // }
    // console.log(playerTurns) 
    // const[gameBoard, setGameBoard] = useState(intialGameBoard);
    // function clickButton(rowIndex, colIndex)
    // {
    //     setGameBoard((prevGameBoard)=>{
    //         const updatedGameBoard = [...prevGameBoard.map(innerArray=>[...innerArray])]
    //         updatedGameBoard[rowIndex][colIndex] =updatedPlayer;
    //         return updatedGameBoard;
    //     });
    //     onSelectSquare();
    // }
    // col= player symbol => important!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    return(
        <ol id="game-board">
        {board.map((row, rowIndex)=>(
            <li key={rowIndex}>
             <ol>
                {row.map((col, colIndex)=>(
                    <li key={colIndex}>
                        <button onClick={()=> onSelectSquare(rowIndex, colIndex)} disabled={col!==null}>{col}</button>
                    </li>
                ))}
             </ol>
            </li>
        ))}
        </ol>
    );
}