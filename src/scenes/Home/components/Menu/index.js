import React from 'react';
import { Wrapper } from './components/Wrapper';
import { Item } from './components/Item';
import { ELEMENTS } from '../../services/elements';

export const Menu = () => (
  <Wrapper>
    <ul>{ELEMENTS.map((_, i) => <Item key={i} />)}</ul>
  </Wrapper>
);
