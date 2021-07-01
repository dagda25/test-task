import React from 'react';

import { HeaderMenu } from '../header-menu/header-menu';
import { HeaderLogo } from '../header-logo/header-logo';
import './css/main-header.css';

export const MainHeader = () => {
  return (
    <header className="main-header">
      <HeaderLogo />
      <HeaderMenu />
    </header>
  );
};
