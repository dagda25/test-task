import React from 'react';

import { HeaderLogo } from '../header-logo/header-logo';
import './css/slider.css';

export const Slider = () => {
  return (
    <section className="slider">
      <ul>
        <li className="slider__item">
          <img src="./assets/6.png" />
        </li>
        <li className="slider__item">
          <img src="./assets/7.png" />
        </li>
        <li className="slider__item">
          <img src="./assets/8.png" />
        </li>
      </ul>
    </section>
  );
};
