import React, { useEffect, useState } from 'react'

import { useBoardLogic } from '../useBoardLogic'

const Brush = () => {
  const [brushStroke, setBrushStroke] = useState(1)
  const { getWinnerBrushStyles } = useBoardLogic()

  useEffect(() => {
    if (brushStroke >= 15) {
      return
    }

    const timer = setTimeout(() => {
      setBrushStroke(brushStroke + 1)
    }, 1000 / 24)

    return () => clearTimeout(timer)
  }, [brushStroke])

  return <img style={getWinnerBrushStyles()} src={`img/brush/${brushStroke}.png`} />
}

export { Brush }
