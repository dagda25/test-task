import React from 'react';
import img1 from './assets/6.png';
import img2 from './assets/7.png';
import img3 from './assets/8.png';

import './css/slider.css';

export const Slider = () => {
  return (
    <section className="slider">
      <ul>
        <li className="slider__item">
          <img src={img1} />
        </li>
        <li className="slider__item">
          <img src={img2} />
        </li>
        <li className="slider__item">
          <img src={img3} />
        </li>
      </ul>
    </section>
  );
};
