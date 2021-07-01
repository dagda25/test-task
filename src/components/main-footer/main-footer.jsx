import React from 'react';

import { FooterMenu } from '../footer-menu/footer-menu';
import './css/main-footer.css';

export const MainFooter = () => {
  return (
    <footer className="main-footer">
      <section className="main-footer__about">
        <div className="main-footer__logo">
          <a href="#">
            <img src="./assets/drop.png" width="" height="40" />
          </a>
        </div>
        <div className="main-footer__info">
          DropsTab is an independent market cap website and is not affiliated
          with any project or company. There is no financial or investment
          advice. © 2019 - 2021 DropsTab.
        </div>
      </section>

      <FooterMenu />
    </footer>
  );
};
