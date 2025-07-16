import React from 'react'
import Guess from '../Guess/Guess'

import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function GuessHistory({ guessHistory, answer }) {
  return (
    <div className="guess-results">
      {guessHistory.map((guess, index) => (
        <Guess key={index} guessStatus={checkGuess(guess, answer)} />
      ))}
      {range(guessHistory.length, NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} guessStatus={[]} />
      ))}
    </div>
  )
}

export default GuessHistory
