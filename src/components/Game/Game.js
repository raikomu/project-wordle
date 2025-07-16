import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput'
import GuessHistory from '../GuessHistory'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([])
  const answerGuessed = guessHistory.includes(answer)

  const handleGuessSubmit = (guess) => {
    setGuessHistory((prevHistory) => [...prevHistory, guess])
  }
  return (
    <>
      <GuessHistory guessHistory={guessHistory} answer={answer} />
      <GuessInput
        answerGuessed={answerGuessed}
        numOfGuesses={guessHistory.length}
        onGuessSubmit={handleGuessSubmit}
      />
    </>
  )
}

export default Game
