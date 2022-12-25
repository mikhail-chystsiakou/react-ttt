import './BoardCell.css'

import { memo } from 'react'

export const BoardCell = memo(({ isCrossMove, cellValue, makeMove, index }) => {
  return (
    <div className="cell" onClick={!cellValue && (() => makeMove(index))}>
      <div
        className="cell__container"
        // thats why in react we use css in js
        style={{ transform: `rotateY(${cellValue === '' ? 0 : 180}deg)` }}
      >
        {/* need to use single tag if double is empty */}
        <div className="cell__image cell__image_front"></div>
        {!cellValue && (
          <img
            className="cell__image cell__image_hint"
            src={isCrossMove ? 'img/cross.png' : 'img/circle.jpg'}
          />
        )}
        <img
          className="cell__image cell__image_back"
          src={cellValue === 'X' ? 'img/cross.png' : 'img/circle.jpg'}
        />
      </div>
    </div>
  )
})
