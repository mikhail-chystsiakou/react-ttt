import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const GameContext = createContext({
  isCrossMove: true,
  board: Array(9).fill(''),
  winner: '',
  winRow: null,
  makeMove: () => {},
  getWinnerBrushStyles: () => {}
})

export const useBoardLogic = () => useContext(GameContext)

export const GameWrapper = ({ children }) => {
  const [state, setState] = useState({ board: Array(9).fill(''), isCrossMove: true })
  const [winnerState, setWinnerState] = useState({ winner: '', winRow: [] })

  const makeMove = useCallback(
    (cellIndex) => {
      console.log(`move: ${cellIndex}`)
      if (winnerState.winner !== '') {
        return
      }

      setState((oldState) => ({
        board: oldState.board.map((v, i) =>
          i === cellIndex ? (oldState.isCrossMove ? 'X' : 'O') : v
        ),
        isCrossMove: !oldState.isCrossMove
      }))
    },
    [setState, winnerState.winner]
  )

  useEffect(() => {
    checkWinner(state.board)
  }, [state])

  // interesting solution, but it's easier to do it through classes: top-left, top-middle...
  // and a lot of "if" we can remove with help of directly name winnerRow === top-left
  const getWinnerBrushStyles = useCallback(() => {
    const styles = {
      position: 'absolute'
    }

    console.log('winnerState.winRow', winnerState.winRow)
    // there is a lot similar code
    if (winnerState.winRow.every((v) => [0, 1, 2].includes(v))) {
      styles.left = '-30%'
      styles.top = '0'
    }
    if (winnerState.winRow.every((v) => [3, 4, 5].includes(v))) {
      styles.left = '-30%'
      styles.top = '34%'
    }
    if (winnerState.winRow.every((v) => [6, 7, 8].includes(v))) {
      styles.left = '-30%'
      styles.top = '67%'
    }
    if (winnerState.winRow.every((v) => [0, 3, 6].includes(v))) {
      styles.rotate = '90deg'
      styles.left = '-65%'
      styles.top = '37%'
    }
    if (winnerState.winRow.every((v) => [1, 4, 7].includes(v))) {
      styles.rotate = '90deg'
      styles.left = '-30%'
      styles.top = '37%'
    }
    if (winnerState.winRow.every((v) => [0, 4, 8].includes(v))) {
      styles.rotate = '45deg'
      styles.left = '-28%'
      styles.top = '32%'
    }
    if (winnerState.winRow.every((v) => [2, 4, 6].includes(v))) {
      styles.rotate = '-45deg'
      styles.left = '-33%'
      styles.top = '32%'
    }
    return styles
  }, [winnerState.winRow])

  const checkWinner = (board) => {
    console.log('🚀 ~ file: useBoardLogic.jsx:84 ~ checkWinner ~ board', board)
    const winRowOptions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    // here we can store of each name of win case like [{case: [0, 1, 2], name: top-left}]
    // then after filtering, assign the name of the winner directly to winnerRow
    const winRow = winRowOptions.filter(
      (w) => board[w[0]] === board[w[1]] && board[w[1]] === board[w[2]] && board[w[0]] !== ''
    )
    console.log('Result of winner check: ' + winRow)

    if (winRow.length > 0) {
      const newWinner = board[winRow[0][0]]

      console.log('Winner: ' + newWinner)
      setWinnerState({ winner: newWinner, winRow: winRow[0] })
    }
  }

  const isCrossMove = useMemo(() => state.isCrossMove, [state.isCrossMove])
  const board = useMemo(() => state.board, [state.board])
  const winner = useMemo(() => winnerState.winner, [winnerState.winner])
  const winRow = useMemo(() => winnerState.winRow, [winnerState.winRow])

  return (
    <GameContext.Provider
      value={{
        isCrossMove,
        board,
        winner,
        winRow,
        makeMove,
        getWinnerBrushStyles
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
