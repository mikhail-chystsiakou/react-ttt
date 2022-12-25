import React, { useEffect, useState } from 'react'

const Brush = ({ imageStyles }) => {
  const [brushStroke, setBrushStroke] = useState(1)

  useEffect(() => {
    if (brushStroke >= 15) {
      return
    }

    const timer = setTimeout(() => {
      setBrushStroke(brushStroke + 1)
    }, 1000 / 24)

    return () => clearTimeout(timer)
  }, [brushStroke])

  return <img style={imageStyles} src={`img/brush/${brushStroke}.png`} />
}

export { Brush }
