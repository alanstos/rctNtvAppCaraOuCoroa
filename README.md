# rctNtvAppCaraOuCoroa


import { Router, Scene } from 'react-native-router-flux';

import Principal from './src/components/Principal';

render(){
	return (
		<Router sceneStyle={ {paddingTop: 50 } } > estilo global

			<Scene key='principal' component={Principal} initil title='Cara ou coroa'
			<Scene key='sobrejogo' component={SObreJogo}
			<Scene key='outrosjogos' component={OutrosJogos}	
		</Router>
)

}

Dentro do CenaPrincipal 


import { Actions } from 'react-native-router-flux';

<TouchableHighligt onPress={ () => { Actions.NomeDaKey(); } }>
	
</TouchableHighligt>

Dentro da CenaResultado

colocar o texto tanto na vertical quanto na horizontal centralizado:

justifyContent: 'center',
alignItems: 'center',

backgroundColor: '#61BD8C',

>> Transformando rotas em componentes

componente funcional, nao é de classe

Rotas.js

const rotas => () = { TUDO que estava no index }

export default rotas;

no index

import Rotas from '.scr/rotas'

return (  <Rotas /> );

fim....

outro projeto

utilizou de componentes apenas funcionais

App.js
Topo.js
Resultado.js
Painel.js

export default props => ( <view ... )

no index-android e index-ios.js fica o mesmo codigo

Centralizando o export para 1 arquivo index.js

export * from './Painel';
export * from './Resultado';
export * from './Topo';

alterou no Topo.js

export default props => ( <view ... )
para 
const Topo = props => ( <view ... )

export { Topo : Topo } ou melhor export { Topo }  // chave valor iguais no ES6

ficando assim no App.js

import { Topo, Resultado, Painel } from './components'; // podemos nao colocar a palavra index foi no ES6 ele busca 

por padrao.

obs: quando temos o export default, na importacao nao é necessario utilizar a chaves.

ex: import Visor from './xpot;' diferetente de import { Visor } from './xpto'

---

Topo.js

Criando um componente Cabecalho.js dentro do Topo.js que tb sera funcional
com titulo de Cabeçalho 1.0

--
Resultado.js
Criando um componente Visor.js dentro do resultado.js 

No visor utilizando o TextInput 

<TextInput placeholder='digita qualquer coisa' editable={false} />


----

papel.js

dentro do componente papel vamos criar 3 sub componentes: Entrada.js, Operacao.js e Comando.js
