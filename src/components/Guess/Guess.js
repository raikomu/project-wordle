import React from 'react'

import { range } from '../../utils'

function Guess({ guessStatus }) {
  return (
    <p className="guess">
      {range(5).map((i) => (
        <span key={i} className={`cell ${guessStatus[i] ? guessStatus[i].status : ''}`}>
          {guessStatus[i] ? guessStatus[i].letter : ''}
        </span>
      ))}
    </p>
  )
}

export default Guess
