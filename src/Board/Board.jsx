import './Board.css'

import React from 'react'

import { BoardCell } from './BoardCell/BoardCell'

export const Board = ({ isCrossMove, board, makeMove }) => {
  return (
    <div className="board">
      {board.map((value, i) => {
        return (
          <BoardCell
            key={`${value}-${i}`}
            isCrossMove={isCrossMove}
            cellValue={value}
            makeMove={makeMove}
            index={i}
          />
        )
      })}
    </div>
  )
}
