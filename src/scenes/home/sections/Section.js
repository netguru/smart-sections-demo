import React from 'react';
import { Wrapper } from './section/Wrapper';
import { Content } from './section/Content';
import { Section as SmartSection, SectionSpy } from 'react-smart-sections';

export const Section = ({ name }) => (
  <SmartSection name={String(name)}>
    <SectionSpy
      name={String(name)}
      render={section => (
        <Wrapper>
          <Content active={section.active}>{name}</Content>
        </Wrapper>
      )}
    />
  </SmartSection>
);
