import React from 'react';
import Banner from '../Banner/Banner';

function WinBanner({ children, guessesLength }) {
  return (
    <Banner type={'happy'}>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {guessesLength > 1 ? `${guessesLength} guesses` : '1 guess'}
        </strong>
        .
      </p>
      {children}
    </Banner>
  );
}

export default WinBanner;
