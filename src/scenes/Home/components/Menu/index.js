import React from 'react';
import { Wrapper } from './components/Wrapper';
import { Item } from './components/Item';
import { SectionsSpy } from 'react-smart-sections';

export const Menu = () => (
  <Wrapper>
    <ul>
      <SectionsSpy
        render={sections =>
          sections.map(section => (
            <Item
              key={section.name}
              name={section.name}
              active={section.active}
              yScrollPoint={section.yScrollPoint}
            />
          ))
        }
      />
    </ul>
  </Wrapper>
);
