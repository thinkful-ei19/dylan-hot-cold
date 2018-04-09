import React from 'react';
import Temperature from './Temperature';
import Previous from './Previous';
import Guess from './Guess';

import './Game.css';

const Game = () => {

  const previousGuesses = [50, 12, 33];

  return (
    <div className="game">
      <h1>Hot or Cold</h1>
      <Temperature temp="hot" />
      <Guess />
      <Previous previousGuesses={previousGuesses} />
    </div>
  );
};

export default Game;