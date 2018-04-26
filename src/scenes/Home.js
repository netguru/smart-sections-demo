import React from 'react';
import { Hero } from './home/Hero';
import { Sections } from './home/Sections';
import { Menu } from './home/Menu';

export const Home = () => (
  <div>
    <Hero>Hero component</Hero>
    <Sections />
    <Menu />
  </div>
);
