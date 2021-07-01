import React, { useState } from 'react';

import './css/header-logo.css';

export const HeaderLogo = () => {
  return (
    <div className="header-logo">
      <a href="#">
        <img src="./assets/drop.png" width="" height="40" />
        <span className="header-logo-label">Beta</span>
      </a>
    </div>
  );
};
