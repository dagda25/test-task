import React, { useState } from 'react';
import { HeaderMenuItem } from '../header-menu-item/header-menu-item';
import { HeaderLogo } from '../header-logo/header-logo';

import './css/header-menu.css';

export const HeaderMenu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpened((prev) => {
      if (prev) {
        document.body.style.overflow = 'auto';
        return false;
      } else {
        document.body.style.overflow = 'hidden';
        return true;
      }
    });
  };

  return (
    <nav
      className={
        isMenuOpened ? 'header-menu header-menu--opened' : 'header-menu'
      }
    >
      <div className="overlay">
        <HeaderLogo />
        <button
          className="header-menu__burger"
          onClick={toggleMenu}
          role="button"
        >
          {isMenuOpened ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L13 13M1 13L13 1L1 13Z"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13H17M1 1H17H1ZM1 7H17H1Z"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        <ul className="header-menu__list">
          <HeaderMenuItem title="Market" />
          <HeaderMenuItem title="Exchanges" />
          <HeaderMenuItem title="Portfolio" active />
        </ul>
        <p className="header-menu__about">© 2019 - 2021 DropsTab.</p>
      </div>
    </nav>
  );
};
