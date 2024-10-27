import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WinBanner from '../WinBanner';
import LostBanner from '../LostBanner';
import Keyboard from '../Keyboard';

function Game() {
  const [answer, setAnswer] = React.useState(() => {
    // Pick a random word on every pageload.
    return sample(WORDS);
  });
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('PLAYING');

  const handleNewGuess = (newGuess) => {
    const newGuesses = [
      ...guesses,
      {
        label: newGuess,
        result: checkGuess(newGuess, answer),
      },
    ];

    setGuesses(newGuesses);

    // Check if game is finished
    if (newGuess === answer) {
      setStatus('WIN');
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus('LOST');
    }
  };

  const handleRestartGame = () => {
    setGuesses([]);
    setStatus('PLAYING');
    setAnswer(sample(WORDS.filter((word) => word !== answer))); // Filter to start game with a new word
  };

  const RestartGameForBanner = () => (
    <footer>
      <button onClick={handleRestartGame}>Restart game</button>
    </footer>
  );

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput
        handleNewGuess={handleNewGuess}
        disabled={status !== 'PLAYING'}
      />
      <Keyboard guesses={guesses} />

      {status === 'WIN' && (
        <WinBanner guessesLength={guesses.length}>
          <RestartGameForBanner />
        </WinBanner>
      )}
      {status === 'LOST' && (
        <LostBanner answer={answer}>
          <RestartGameForBanner />
        </LostBanner>
      )}
    </>
  );
}

export default Game;
