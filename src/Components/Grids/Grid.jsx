import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css'
import isWinner from "../Helper/isWinner";

function Grid ( {noOfCards} ) {
    const [board, setBoard] = useState(Array(noOfCards).fill(" "));
    const[turn, setTurn] = useState(true); // true hole X or O
    const [winner, setWinner] = useState(null);

    function play(idx) {
        if(turn) board[idx] = "X";
        else board[idx] = "O";
        setBoard([... board]);
        setTurn(!turn);

        const win = (isWinner(board, (turn) ? "X" : "O" ));

        if(win != null) {
            setWinner(win);
        }
        
    }

    function Reset() {
        setBoard(Array(noOfCards).fill(" "));
        setTurn(true);
        setWinner(null);
    } 

    return (
        <div className="grid-wrapper">

            {
                // truthy and falsy concept of js is being used here, if winner is false then the and part will not be executed, but id winner is true the next part will be executed and returned 
                winner && ( 
                    <>
                        <h1 className="winner-name">
                            Winner is: {winner}
                        </h1>

                        <button className="reset" onClick={Reset} >RESET GAME</button>
                    </>
                )
            }

            <h1 className="turn-state">
                Current Turn: {(turn) ? "X" : "O"}
            </h1>
            <div className="grid">
                {board.map((el, idx) => (
                    <Card input = {el} onPlay = {play} index = {idx} gameEnd={winner ? true : false} />
                ))}
            </div>
        </div>
        
    )
}

export default Grid;