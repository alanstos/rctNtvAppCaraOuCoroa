import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Rotas from './src/Rotas';

export default class rctNtvAppCaraOuCoroa extends Component {
  render() {
    return (
      <Rotas />
    );
  }
}

AppRegistry.registerComponent('rctNtvAppCaraOuCoroa', () => rctNtvAppCaraOuCoroa);
