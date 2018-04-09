import React from 'react';

const Guess = (props) => {
  return (
    <div className="guess">
      <input id="guess__input" placeholder="Enter your Guess" />
      <button type="submit" className="guess__submit">Guess</button>
      <p class="guess__total">Guess #{props.totalGuesses || 0}!</p>
    </div>
  );
};

export default Guess;