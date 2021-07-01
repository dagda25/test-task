import React from 'react';

import './css/button.css';

export const Button = ({ text, clickHandler, active }) => {
  return (
    <button className="button" disabled={!active} onClick={clickHandler}>
      {text}
    </button>
  );
};
