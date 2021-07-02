import React from 'react';

import './css/button.css';

export const Button = ({ text, clickHandler, active }) => {
  return (
    <button className="button" hidden={!active} onClick={clickHandler}>
      {text}
    </button>
  );
};
