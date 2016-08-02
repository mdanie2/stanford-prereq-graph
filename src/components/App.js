import React, { Component } from 'react';
import Graph from './Graph';
import {CSSpec} from '../utils/CSSpecv2';
import {Constants} from '../utils/Constants'

export default class App extends Component {
  render() {
    return (
      <Graph spec={CSSpec.navSpecs} constants={Constants.constants} />
    );
  }
}
