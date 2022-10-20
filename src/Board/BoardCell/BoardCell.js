import React from 'react'
import './BoardCell.css'

const BoardCell = ({ isCrossMove, cellValue, makeMove }) => {
  return (
    <div className="cell" onClick={cellValue === '' ? makeMove : null }>
      <div
        className="cell__container"
        style={{ transform: `rotateY(${cellValue === '' ? 0 : 180}deg)` }}
      >
          <div className="cell__image cell__image_front" ></div>
          {
            cellValue === ''
              ? <img
              className="cell__image cell__image_hint"
              src={isCrossMove ? 'img/cross.png' : 'img/circle.jpg'}/>
              : null
          }
          <img
            className="cell__image cell__image_back"
            src={cellValue === 'X' ? 'img/cross.png' : 'img/circle.jpg'}/>
      </div>
    </div>
  )
}

export { BoardCell }
