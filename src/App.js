import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// Isso aqui é um componente

//lembrando que esse código parece html mas ele é JSX

// O html não usa, por exemplo, classeName. A gente usa só class no html...

// O componente retorna só uma elemento, mas dentro desse elemento pode ter outros elementos.

// O babel é a ferramenta que transforma esse JSX em Javascript.

// O Webpack é a ferramenta que faz o bundle (bundle é o cara que faz o enpacotamento dos arquivos. 
// ele vai empacotar esses arquivos todos para publicação)

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {

state = {
   name: 'Ricardo Nascimento', //isso aqui é uma propriedade da classe, que aqui nós chamamos de estado.
   cont: 0 //isso aqui é uma propriedade da classe, que aqui nós chamamos de estado.
}

// A função dos métodos e atualizar valores das propriedades (que aqui chamamos de estados

mudaNome = ()=>{
   this.setState ({name: 'José', cont: 0}); //eu uso a palavra this para me referenciar aos estados da classe
}

incrementa = ()=>{ //Esse método vai incrementar o cont
   const {cont} = this.state; //tenho que criar uma variável para mudar o valor do cont
   // isso é uma atribuição via desestruturação java script, pode pesquisar no google. Em vez de usar esse tipo de atribuição
   // eu poderia ter usado
   //const cont = this.state.cont;

   this.setState({cont: cont+1});
}

decrementa=()=>{
   const {cont} = this.state;
   this.setState({cont: cont-1});
}

 render(){
    const {name, cont}= this.state; //vc pode fazer a atribuição de dois valores em uma mesma linha
  return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
             <p onClick={this.mudaNome}>
             {name} {cont}
             </p>
             <p onClick={this.incrementa}>
                Valor +
             </p>
             <p onClick={this.decrementa}>
                Valor -
             </p>
           <a
              className="App-link"
             href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
               Learn React
            </a>
          </header>
        </div>
       );
 }
}



export default App;
