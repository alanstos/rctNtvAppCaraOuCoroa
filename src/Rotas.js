import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './components/Principal';
import OutrosJogos from './components/OutrosJogos';
import SobreJogo from './components/SobreJogo';
import Resultado from './components/Resultado';

const Rotas = () => 
	 (<Router sceneStyle={ {paddingTop: 50 } } > 

      <Scene key='Principal' component={Principal}      title='Cara ou coroa' initil />
      <Scene key='OutrosJogos' component={OutrosJogos}  title='Outros jogos' />
      <Scene key='SobreJogo' component={SobreJogo}      title='Sobre jogo' />
      <Scene key='Resultado' component={Resultado}      title='Resultado' />
      
    </Router>);


export default Rotas;
  