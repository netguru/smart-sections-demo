import React from 'react';
import { Wrapper } from './components/Wrapper';
import { Content } from './components/Content';
import { Element } from 'react-scroll';

export const Section = ({ name }) => (
  <Element name={String(name)}>
    <Wrapper>
      <Content />
    </Wrapper>
  </Element>
);
