import React from 'react';
import { Wrapper } from './section/Wrapper';
import { Content } from './section/Content';
import { Section as SmartSection } from 'react-smart-sections';

export const Section = ({ name }) => (
  <SmartSection name={String(name)}>
    <Wrapper>
      <Content />
    </Wrapper>
  </SmartSection>
);
