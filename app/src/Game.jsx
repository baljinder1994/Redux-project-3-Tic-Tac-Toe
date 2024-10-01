import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {makeMove,resetGame} from './gameSlice'
const Game = () => {
    const dispatch= useDispatch()
    const{board,xIsNext,winner}=useSelector(state => state.game)

    const handleClick=(index)=>{
        dispatch(makeMove({index}))
    }

    const handleReset=()=>{
        dispatch(resetGame())
    }

    const renderSquare=(index)=>(
        <button className='square' onClick={() => handleClick(index)}>
            {board[index]}
        </button>
    )
 const status=winner ? `Winner: ${winner}`: `Next player:${xIsNext ? 'X':'O'}`

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className='status'>{status}</div>
      <div className='board'>
        {[0,1,2].map(i => (
            <div key={i} className='board-row'>
                {[0,1,2].map(j => renderSquare(i * 3 + j))}
            </div>
        ))}
      </div>
      <button onClick={handleReset}>Reset Game</button>
    </div>
  )
}

export default Game
