import React, { Component } from 'react';
import Graph from './Graph';
import Selection from './Selection';

export default class App extends Component {
  render() {
    return (
      <Selection show={true} specName={null} />
    );
  }
}
