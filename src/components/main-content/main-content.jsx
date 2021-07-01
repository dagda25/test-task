import React from 'react';

import { Slider } from '../slider/slider';
import { Assets } from '../assets/assets';
import './css/main-content.css';

export const MainContent = () => {
  return (
    <main className="main-content">
      <Slider />
      <Assets />
    </main>
  );
};
