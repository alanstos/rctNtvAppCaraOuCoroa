import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import { Actions, Router, Scene } from 'react-native-router-flux';

const logoImg = require('../imgs/logo.png');
const botaoJogarImg = require('../imgs/botao_jogar.png');
const sobreJogoImg = require('../imgs/sobre_jogo.png');
const outrosJogosImg = require('../imgs/outros_jogos.png');

const _jogar = () => {
  Actions.Resultado();
}

const _sobreJogo = () => {
  Actions.SobreJogo();
}

const _outrosJogos = () => {
  Actions.OutrosJogos();
}

export default class Principal extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={ styles.topo }>
          <Image style={styles.logo} source={logoImg} />
        </View>

        <View style={ styles.acoes }>
          <TouchableHighlight onPress={_jogar}>
            <Image source={botaoJogarImg} />
          </TouchableHighlight>
        </View>

        <View style={ styles.rodape }>
          <TouchableHighlight onPress={_sobreJogo}>
            <Image source={sobreJogoImg} />
          </TouchableHighlight>          

          <TouchableHighlight onPress={_outrosJogos} >
            <Image source={outrosJogosImg} />
          </TouchableHighlight>   

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container : {
    flex: 1,
    backgroundColor : '#61BD8C',
    justifyContent: 'space-between'
  },
  topo : {
    alignItems: 'center',
    marginTop: 20,
  },
  acoes : {
    marginTop: 0,
    alignItems: 'center',
  },
  rodape :{
    flexDirection : 'row',
    justifyContent: 'space-between',
  }

});


