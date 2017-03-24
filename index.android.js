import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import Principal from './src/components/Principal';
import OutrosJogos from './src/components/OutrosJogos';
import SobreJogo from './src/components/SobreJogo';
import Resultado from './src/components/Resultado';

export default class rctNtvAppCaraOuCoroa extends Component {
  render() {
    return (
    <Router sceneStyle={ {paddingTop: 50 } } > 

      <Scene key='principal' component={Principal} initil title='Cara ou coroa' />
      <Scene key='OutrosJogos' component={OutrosJogos}    title='Outros jogos' />
      <Scene key='SobreJogo' component={SobreJogo}        title='Sobre jogo' />
      <Scene key='Resultado' component={Resultado}        title='Sobre jogo' />
      
      
    </Router>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('rctNtvAppCaraOuCoroa', () => rctNtvAppCaraOuCoroa);
