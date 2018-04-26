import React from 'react';
import { Dot } from './components/Dot';
import { Wrapper } from './components/Wrapper';
import { Rectangle } from './components/Rectangle';
import { Link } from 'react-scroll';

export class Item extends React.Component {
  state = {
    active: false,
  };

  handleSetActive = () => this.setState({ active: true });

  handleSetInactive = () => this.setState({ active: false });

  render() {
    const { name } = this.props;
    const { active } = this.state;
    return (
      <li>
        <Link
          to={String(name)}
          spy
          smooth
          onSetActive={this.handleSetActive}
          onSetInactive={this.handleSetInactive}
        >
          <Wrapper>
            <Dot active={active} />
            <Rectangle active={active} />
          </Wrapper>
        </Link>
      </li>
    );
  }
}
