import React from 'react';
import { Dot } from './item/Dot';
import { Wrapper } from './item/Wrapper';
import { Rectangle } from './item/Rectangle';
import animateScrollTo from 'animated-scroll-to';

export class Item extends React.Component {
  handleClick = e => {
    e.preventDefault();
    animateScrollTo(this.props.yScrollPoint + 80);
  };

  render() {
    const { active } = this.props;
    return (
      <a href="#" onClick={this.handleClick}>
        <Wrapper>
          <Dot active={active} />
          <Rectangle active={active} />
        </Wrapper>
      </a>
    );
  }
}
