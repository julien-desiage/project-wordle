import React from 'react';

function Banner({ children, type = 'happy' }) {
  return <div className={`banner ${type}`}>{children}</div>;
}

export default Banner;
