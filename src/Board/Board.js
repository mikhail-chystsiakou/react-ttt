import './Board.css'
import React from 'react'
import { BoardCell } from './BoardCell/BoardCell'

const Board = ({ isCrossMove, board, makeMove }) => {
  console.log(`board: ${board}`)
  return (
    <div className="board" >
      {board.map((_, i) => {
        return <BoardCell
          key={i}
          isCrossMove={isCrossMove}
          cellValue={board[i]}
          makeMove={ () => makeMove(i) }
        />
      })}
    </div>
  )
}

export { Board }
