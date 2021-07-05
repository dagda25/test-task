import React, { useState } from 'react';
import { FooterMenuItem } from '../footer-menu-item/footer-menu-item';

import './css/footer-menu.css';

export const FooterMenu = () => {
  return (
    <nav className="footer-menu" aria-label="Footer navigation">
      <section className="footer-menu__services">
        <h3 className="footer-menu__title">Services</h3>
        <ul className="footer-menu__list">
          <FooterMenuItem title="Market" />
          <FooterMenuItem title="Exchanges" />
          <FooterMenuItem title="Portfolio" />
        </ul>
      </section>
      <section className="footer-menu__social">
        <h3 className="footer-menu__title">Social</h3>
        <ul className="footer-menu__list">
          <FooterMenuItem title="Telegram News" />
          <FooterMenuItem title="Telegram Chat" />
        </ul>
      </section>
      <section className="footer-menu__legal">
        <h3 className="footer-menu__title">Legal</h3>
        <ul className="footer-menu__list">
          <FooterMenuItem title="Privacy Policy" />
          <FooterMenuItem title="Terms of Use" />
        </ul>
      </section>
    </nav>
  );
};
