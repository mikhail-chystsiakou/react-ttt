import './Board.css'

import React from 'react'

import { useBoardLogic } from '../useBoardLogic'
import { BoardCell } from './BoardCell/BoardCell'

export const Board = () => {
  const { board } = useBoardLogic()

  return (
    <div className="board">
      {board.map((value, i) => {
        return <BoardCell key={`${i}`} cellValue={value} index={i} />
      })}
    </div>
  )
}
