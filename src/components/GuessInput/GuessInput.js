import React from 'react'

import HappyBanner from '../HappyBanner'
import SadBanner from '../SadBanner'

function GuessInput({ answer, guessHistory, onGuessSubmit }) {
  const [guess, setGuess] = React.useState('')
  const isAnswerGuessed = guessHistory.includes(answer)
  const numOfGuesses = guessHistory.length

  const submitGuess = (event) => {
    event.preventDefault()
    const upperCaseGuess = guess.toUpperCase()
    console.info({ upperCaseGuess })
    setGuess('')
    onGuessSubmit(upperCaseGuess)
  }

  return (
    <div className="guess-input-wrapper">
      <form className="guess-input" onSubmit={submitGuess}>
        <label htmlFor="guess-input">Enter guess:</label>
        {isAnswerGuessed && <HappyBanner numOfGuesses={numOfGuesses} />}
        {!isAnswerGuessed && numOfGuesses >= 6 && <SadBanner answer={answer} />}
        <input
          type="text"
          value={guess}
          pattern="[A-Z]{5}"
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
          id="guess-input"
          disabled={isAnswerGuessed || numOfGuesses >= 6}
        />
      </form>
    </div>
  )
}

export default GuessInput
