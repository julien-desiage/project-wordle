import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(0, 5).map((index) => {
        const result = guess?.result[index];

        const classes = ['cell'];
        if (result) {
          classes.push(result.status);
        }

        return (
          <span className={classes.join(' ')} key={index}>
            {result?.letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
