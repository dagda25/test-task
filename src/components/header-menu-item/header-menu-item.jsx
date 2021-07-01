import React from 'react';
import './css/header-menu-item.css';

export const HeaderMenuItem = ({ title, active }) => {
  return (
    <li
      className={
        active
          ? 'header-menu-item header-menu-item--active'
          : 'header-menu-item'
      }
    >
      <a href="#">{title}</a>
    </li>
  );
};
