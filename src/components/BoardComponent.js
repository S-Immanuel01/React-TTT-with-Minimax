import { useEffect, useState } from "react";
import Square from "./SquareComponent";


export default function Board() {
    
    const [value, setValue] = useState(Array(9).fill("-"))
    useEffect(()=> {
        let onGame = true
        // VLAUE
        const valueG = Array(9).fill("-");

        // function to play the value of x in an empty board state 
        function playXonRandomSpot(board_state) {
            // if all the tic tac toe boards are empty 
            if (getfreeSpacesOnBoard(board_state) === 9) {
                const randomIndex = Math.floor(Math.random(8) * 10);
                console.log(`this is random ${randomIndex}`)
                board_state[randomIndex] = "X";
                setValue(board_state)
            }
        }
        
        if (onGame) {
            setTimeout(() => playXonRandomSpot(valueG), 10)
        };
        return () => {onGame = false}
    }, [])

    const [xIsNext, setXIsNext] = useState(false)

    const winner = calculateWinner(value)

    function getfreeSpacesOnBoard(boardState) {
        let space = 0
        for (let index =0; index < 9; index ++){
            if (boardState[index] === "-") {
                space += 1
            }
        }
        return space
    }

    function calculateWinner(value) {
        const line = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [3,4,6],
            [0,3,6],
            [1,4,7],
            [2,4,6],
            [2,5,8]
            
        ]

        for (let index = 0; index < line.length; index++) {
            const [a,b,c] = line[index]
            if (value[a] !== "-" && value[a] === value[b] && value[a] === value[c]) {
                if (value[b] === "X") {
                    return 1
                }
                else if (value[b] === "O"){
                    return 2
                }
                
            }
        }
        return null;
    }
    let nextValue = value.slice();
    function onClick(i) {
        if (value[i] !== "-"|| calculateWinner(value) != null) {
            return;
        }
        nextValue = value.slice()
        nextValue[i] = "O"
        setValue(nextValue)
        setXIsNext(true)
        setTimeout(() => bestMove(nextValue), 1000)
    }

    function minimax(isMax, state, depth) {
        let utility = calculateWinner(state)
        if (utility === 1) {
            return 1 * (getfreeSpacesOnBoard(state)+1)
        }
        if (utility === 2) {
            return -1 * (getfreeSpacesOnBoard(state) + 1)
        }
        else if (getfreeSpacesOnBoard === 0 ) {
            return 0
        }
        
        if (isMax) {
            let bestScore = -Infinity
            for (let index = 0; index < state.length; index++) {
                if (state[index] === "-") {
                    state[index] = "X"
                    let score = minimax(false, state, depth)
                    // console.log(`this is subscores ${score}`)
                    state[index] = "-"
                    bestScore = Math.max(score, bestScore)
                }
            }
            return bestScore
        }
        
        else {
            let bestScore = Infinity
            for (let index = 0; index < state.length; index++) {
                if (state[index] === "-") {
                    state[index] = "O"
                    let score = minimax(true, state, depth)
                    state[index] = "-"
                    bestScore = Math.min(score, bestScore)
                }
            }
            return bestScore
        }


    }

    function bestMove(state) {
        if (xIsNext) {
            return
        }
        if (winner !== null) {
            return
        }
        let bestScore = -1000000
        let move;
        for (let index = 0; index < state.length; index++) {
            if (state[index] === "-") {
                state[index] = "X"
                let score = minimax(false, state, 0)
                // console.log(`score is i=${index} score=${score}`)
                state[index] = "-"
                if (score > bestScore) {
                    bestScore = Math.max(score, bestScore)
                    move = {index}
                }
            }
            
        }
        state[move.index] = "X"
        
        setValue(state)
        setXIsNext(false)
    }

    
    
    return (
        <div className="board-col" >
            {
                winner === null ?
                <p>it is {xIsNext ? "X" : "Your"} turn</p>
                : <p>{(winner === 1) ? "Winner :X, x is asking if you want a rematch" : "Winner: O"} </p>
            }
            {
                (getfreeSpacesOnBoard(value) === 0) ?
                <p>tie! X requests a rematch</p> : <p></p>
            }
            <div className="board-row-1">
                <Square value={value[0]} onclick={() => onClick(0)}/>
                <Square value={value[1]} onclick={() => onClick(1)}/>
                <Square value={value[2]} onclick={() => onClick(2)}/>
            </div>
            <div className="board-row-2">
                <Square value={value[3]} onclick={() => onClick(3)}/>
                <Square value={value[4]} onclick={() => onClick(4)}/>
                <Square value={value[5]} onclick={() => onClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={value[6]} onclick={() => onClick(6)}/>
                <Square value={value[7]} onclick={() => onClick(7)}/>
                <Square value={value[8]} onclick={() => onClick(8)}/>
            </div>
            
        </div>
    )
}