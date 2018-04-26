import React from 'react';
import { Hero } from './components/Hero';
import { Sections } from './components/Sections';
import { Menu } from './components/Menu';

export const Home = () => (
  <div>
    <Hero>Hero component</Hero>
    <Sections />
    <Menu />
  </div>
);
