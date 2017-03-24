import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class Resultado extends Component {

  constructor(props) {
    super(props);
    this.state = { caraCoroa: '' };    
  }

  componentDidMount() {

    let num_gerado = Math.round(Math.random() * 2);
    let image = '';

    if (num_gerado === 0){
      image = 'coroa';
    } else {
      image = 'cara';
    }
    
    this.setState( {caraCoroa: image } );  
  }

  render() {

    if ( this.state.caraCoroa == 'cara'){
      return (
        <View style={styles.container}>
          <Image source={cara} />             
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Image source={coroa} />             
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container : {
    flex: 1,
    backgroundColor : '#61BD8C',
    alignItems: 'center',
    justifyContent: 'center'
  },


});


