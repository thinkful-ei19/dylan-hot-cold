import React from 'react';

const Temperature = (props) => {
  return (
    <div>
      <p className="temp">{props.temp}</p>
    </div>
  );
};

export default Temperature;