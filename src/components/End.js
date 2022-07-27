import React from 'react'
import { game } from '../utils/constants'

const End = ({ changePage, gameResult }) => {
  return (
    <div>
      <h1>LOSE\WIN</h1>
      <p>{`player result: ${gameResult.player}`}</p>
      <p>{`computer result: ${gameResult.computer}`}</p>
      <button onClick={() => changePage(game)}>Again</button>
    </div>
  )
}

export default End