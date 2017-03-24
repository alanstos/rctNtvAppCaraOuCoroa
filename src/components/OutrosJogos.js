import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

const logoImg = require('../imgs/logo.png');
const botaoJogarImg = require('../imgs/botao_jogar.png');

const _jogar = () => {
  alert('jogar');
}

export default class OutrosJogos extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text > outro jogos</Text>
             
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container : {
    flex: 1,
    backgroundColor : '#61BD8C',
    alignItems: 'center',

  },
  logo : {
    marginTop: 50
  }  ,
  botaoJogar : {
    marginTop: 10
  }  

});


