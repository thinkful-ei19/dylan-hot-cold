import React from 'react';

const Previous = (props) => {

  const previousGuesses = props.previousGuesses.map(guess => {
    return <li className="previous__guess">{guess}</li>;
  });

  return (
    <div className="previous">
      <ul className="previous__list">
        {previousGuesses}
      </ul>
    </div>
  );
};

export default Previous;