import React from 'react'

import HappyBanner from '../HappyBanner'

function GuessInput({ answerGuessed, numOfGuesses, onGuessSubmit }) {
  const [guess, setGuess] = React.useState('')

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
        {answerGuessed && <HappyBanner numOfGuesses={numOfGuesses} />}
        <input
          type="text"
          value={guess}
          pattern="[A-Z]{5}"
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
          id="guess-input"
          disabled={answerGuessed || numOfGuesses >= 6}
        />
      </form>
    </div>
  )
}

export default GuessInput
