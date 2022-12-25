import './App.css'

import React from 'react'

import { Board } from './Board/Board'
import { Brush } from './Brush/Brush'
import { useBoardLogic } from './useBoardLogic'

function App() {
  const { winner } = useBoardLogic()

  return (
    <div className="app">
      <header className="app__header">
        {winner !== '' ? `Winner: ${winner}` : 'Let the battle begin.'}
      </header>
      <div className="app__board">
        <Board />
        {winner !== '' ? <Brush /> : null}
      </div>
    </div>
  )
}

export default App
