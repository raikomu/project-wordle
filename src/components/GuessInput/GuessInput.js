import React from 'react'

function GuessInput() {
  const [guess, setGuess] = React.useState('')

  const submitGuess = (event) => {
    event.preventDefault()
    const upperCaseGuess = guess.toUpperCase()
    console.info({ upperCaseGuess })
    setGuess('')
  }

  return (
    <div className="guess-input-wrapper">
      <form className="guess-input" onSubmit={submitGuess}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
          id="guess-input"
        />
      </form>
    </div>
  )
}

export default GuessInput
