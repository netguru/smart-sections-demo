import React from 'react';
import { Section } from './components/Section';
import { ELEMENTS } from '../../services/elements';

export const Sections = () => (
  <div>{ELEMENTS.map((_, i) => <Section key={i} name={i} />)}</div>
);
