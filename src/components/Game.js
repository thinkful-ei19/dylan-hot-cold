import React from 'react';
import Temperature from './Temperature';
import Previous from './Previous';
import Guess from './Guess';

const Game = () => {

  const previousGuesses = [50, 12, 33];

  return (
    <div className="game">
      <Temperature temp="hot" />
      <Guess />
      <Previous previousGuesses={previousGuesses} />
    </div>
  );
};

export default Game;