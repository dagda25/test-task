import React from 'react';
import './css/footer-menu-item.css';

export const FooterMenuItem = ({ title }) => {
  return (
    <li className="header-menu-item">
      <a href="#">{title}</a>
    </li>
  );
};
