import React from 'react';
import { Dot } from './components/Dot';
import { Wrapper } from './components/Wrapper';
import { Rectangle } from './components/Rectangle';

export class Item extends React.Component {
  render() {
    const { active, scroll } = this.props;
    return (
      <a href="#" onClick={scroll}>
        <Wrapper>
          <Dot active={active} />
          <Rectangle active={active} />
        </Wrapper>
      </a>
    );
  }
}
