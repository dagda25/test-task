import React, { useState } from 'react';
import { HeaderMenuItem } from '../header-menu-item/header-menu-item';
import { HeaderLogo } from '../header-logo/header-logo';

import './css/header-menu.css';

export const HeaderMenu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpened((prev) => (prev ? false : true));
  };

  return (
    <nav
      className={
        isMenuOpened ? 'header-menu header-menu--opened' : 'header-menu'
      }
    >
      <HeaderLogo />
      <button className="header-menu__burger" onClick={toggleMenu}></button>
      <ul className="header-menu__list">
        <HeaderMenuItem title="Market" active="false" />
        <HeaderMenuItem title="Exchanges" active="false" />
        <HeaderMenuItem title="Portfolio" active="true" />
      </ul>
    </nav>
  );
};
