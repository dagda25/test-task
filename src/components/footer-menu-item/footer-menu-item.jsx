import React from 'react';
import './css/footer-menu-item.css';

export const FooterMenuItem = ({ title }) => {
  return (
    <li className="footer-menu-item">
      <a href="#">{title}</a>
    </li>
  );
};
