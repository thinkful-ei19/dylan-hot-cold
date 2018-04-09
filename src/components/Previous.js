import React from 'react';

import './Previous.css';

const Previous = (props) => {

  const previousGuesses = props.previousGuesses.map((guess, index) => {
    return <li key={index} className="previous__guess">{guess}</li>;
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