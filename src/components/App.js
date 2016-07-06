import React, { Component } from 'react';
import Graph from './Graph';
import {CSSpec} from '../utils/CSSpec';

export default class App extends Component {
  render() {
    return (
      <Graph spec={CSSpec.navSpecs} />
    );
  }
}
