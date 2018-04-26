import React, { Component } from 'react';
import { Home } from 'scenes/Home';
import { injectGlobal } from 'styled-components';
import 'reset-css';

injectGlobal`
  box-sizing: content-box;
`

export class App extends Component {
  render() {
    return <Home />;
  }
}
