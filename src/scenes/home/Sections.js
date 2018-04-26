import React from 'react';
import { Section } from './sections/Section';
import { ELEMENTS } from './elements';

export const Sections = () => (
  <div>{ELEMENTS.map((_, i) => <Section key={i} name={i} />)}</div>
);
