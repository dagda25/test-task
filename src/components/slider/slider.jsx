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
      <h2 className="slider__title">Info</h2>
      <ul>
        <li className="slider__item slider__item--desktop">
          <picture>
            <source media="(max-width: 639px)" srcSet={'.' + img1m} />
            <source media="(max-width: 1279px)" srcSet={'.' + img1t} />
            <img src={'.' + img1} alt="slide" />
          </picture>
        </li>
        <li className="slider__item slider__item--desktop">
          <picture>
            <source media="(max-width: 639px)" srcSet={'.' + img2m} />
            <source media="(max-width: 1279px)" srcSet={'.' + img2t} />
            <img src={'.' + img2} alt="slide" />
          </picture>
        </li>
        <li className="slider__item slider__item--desktop">
          <picture>
            <source media="(max-width: 639px)" srcSet={'.' + img3m} />
            <source media="(max-width: 1279px)" srcSet={'.' + img3t} />
            <img src={'.' + img3} alt="slide" />
          </picture>
        </li>
      </ul>
    </section>
  );
};
