import React from 'react'

function GuessHistory({ guessHistory }) {
  return (
    <div className="guess-results">
      {guessHistory.map((guess, index) => (
        <p className="guess" key={index}>
          {guess}
        </p>
      ))}
    </div>
  )
}

export default GuessHistory
