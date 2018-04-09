import React from 'react';

import './Temperature.css';

const Temperature = (props) => {
  return (
    <div className="temperature">
      <p className="temp">{props.temp}</p>
    </div>
  );
};

export default Temperature;