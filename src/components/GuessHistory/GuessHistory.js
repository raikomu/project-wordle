import React from 'react'
import Guess from '../Guess/Guess'

import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'

function GuessHistory({ guessHistory }) {
  return (
    <div className="guess-results">
      {guessHistory.map((guess, index) => (
        <Guess key={index} guess={guess} />
      ))}
      {range(guessHistory.length, NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} guess={''} />
      ))}
    </div>
  )
}

export default GuessHistory
