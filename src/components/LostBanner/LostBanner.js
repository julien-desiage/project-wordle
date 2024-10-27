import React from 'react';
import Banner from '../Banner/Banner';

function LostBanner({ children, answer }) {
  return (
    <Banner type={'sad'}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      {children}
    </Banner>
  );
}

export default LostBanner;