import React from 'react';
import { Dot } from './components/Dot';
import { Wrapper } from './components/Wrapper';
import { Rectangle } from './components/Rectangle';

export const Item = () => (
  <li>
    <Wrapper>
      <Dot />
      <Rectangle />
    </Wrapper>
  </li>
);
