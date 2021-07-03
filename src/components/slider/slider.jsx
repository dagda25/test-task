import React from 'react';
import img1 from './assets/6.png';
import img2 from './assets/7.png';
import img3 from './assets/8.png';
import img1t from './assets/t1.png';
import img2t from './assets/t2.png';
import img3t from './assets/t3.png';
import img1m from './assets/m1.png';
import img2m from './assets/m2.png';
import img3m from './assets/m3.png';

import './css/slider.css';

export const Slider = () => {
  return (
    <section className="slider">
      <ul>
        <li className="slider__item slider__item--desktop">
          <img src={'.' + img1} />
        </li>
        <li className="slider__item slider__item--desktop">
          <img src={'.' + img2} />
        </li>
        <li className="slider__item slider__item--desktop">
          <img src={'.' + img3} />
        </li>
        <li className="slider__item slider__item--tablet">
          <img src={'.' + img1t} />
        </li>
        <li className="slider__item slider__item--tablet">
          <img src={'.' + img2t} />
        </li>
        <li className="slider__item slider__item--tablet">
          <img src={'.' + img3t} />
        </li>
        <li className="slider__item slider__item--mobile">
          <img src={'.' + img1m} />
        </li>
        <li className="slider__item slider__item--mobile">
          <img src={'.' + img2m} />
        </li>
        <li className="slider__item slider__item--mobile">
          <img src={'.' + img3m} />
        </li>
      </ul>
    </section>
  );
};
