import React from 'react';
import img1 from './assets/6.jpg';
import img2 from './assets/7.jpg';
import img3 from './assets/8.jpg';
import img1t from './assets/t1.jpg';
import img2t from './assets/t2.jpg';
import img3t from './assets/t3.jpg';
import img1m from './assets/m1.jpg';
import img2m from './assets/m2.jpg';
import img3m from './assets/m3.jpg';

import './css/slider.css';

export const Slider = () => {
  return (
    <section className="slider">
      <ul>
        <li className="slider__item slider__item--desktop">
          <img src={'.' + img1} alt="slide" />
        </li>
        <li className="slider__item slider__item--desktop">
          <img src={'.' + img2} alt="slide" />
        </li>
        <li className="slider__item slider__item--desktop">
          <img src={'.' + img3} alt="slide" />
        </li>
        <li className="slider__item slider__item--tablet">
          <img src={'.' + img1t} alt="slide" />
        </li>
        <li className="slider__item slider__item--tablet">
          <img src={'.' + img2t} alt="slide" />
        </li>
        <li className="slider__item slider__item--tablet">
          <img src={'.' + img3t} alt="slide" />
        </li>
        <li className="slider__item slider__item--mobile">
          <img src={'.' + img1m} alt="slide" />
        </li>
        <li className="slider__item slider__item--mobile">
          <img src={'.' + img2m} alt="slide" />
        </li>
        <li className="slider__item slider__item--mobile">
          <img src={'.' + img3m} alt="slide" />
        </li>
      </ul>
    </section>
  );
};
