import React from 'react';
import { Wrapper } from './components/Wrapper';
import { Content } from './components/Content';
import { Section as SmartSection } from 'react-smart-sections';

export const Section = ({ name }) => (
  <SmartSection name={String(name)}>
    <Wrapper>
      <Content />
    </Wrapper>
  </SmartSection>
);
