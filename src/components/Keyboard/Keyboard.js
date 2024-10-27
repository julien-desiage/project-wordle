import React from 'react';

function Keyboard({
  guesses,
  template = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'],
}) {
  const getStatusLetterClass = (keyboardLetter) => {
    let statusClass = 'neutral'; // neutral status = letter not used

    // Prioritise status because letter can be misplaced on a guess and correct on another
    // In this case, use correct status for class letter
    const statusWeight = {
      neutral: 0,
      incorrect: 1,
      misplaced: 2,
      correct: 3,
    };

    guesses.forEach((guess) => {
      guess.result.forEach((guessLetter) => {
        if (keyboardLetter !== guessLetter.letter) {
          return;
        }

        if (statusWeight[guessLetter.status] > statusWeight[statusClass]) {
          statusClass = guessLetter.status;
        }
      });
    });

    return statusClass;
  };

  return (
    <div className="keyboard">
      {template.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.split('').map((letter, index) => {
            letter = letter.toUpperCase();

            return (
              <span
                className={`keyboard-letter ${getStatusLetterClass(letter)}`}
                key={index}
              >
                {letter}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
