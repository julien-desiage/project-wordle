import React from 'react';

function GuessInput({ handleNewGuess, disabled = false }) {
  const [guest, setGuest] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNewGuess(guest);
    setGuest('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        name="guess"
        pattern="[A-Z]{5}"
        value={guest}
        title="5 letters"
        disabled={disabled}
        onChange={(event) => {
          setGuest(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
