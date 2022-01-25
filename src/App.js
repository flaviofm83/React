import './App.css';
import { Component } from 'react';


class App extends Component {

state = {
   posts:[
      {
         id: 1,
         titulo: 'Título 1',
         conteudo: 'Conteúdo 1'
      },
      {
         id: 2,
         titulo: 'Título 2',
         conteudo: 'Conteúdo 2'
      },
      {
         id: 3,
         titulo: 'Título 3',
         conteudo: 'Conteúdo 3'
      }
   ]
}


 render(){
    const {posts}= this.state; //vc pode fazer a atribuição de todos os valores em uma mesma linha
  return (
        <div className="App">
           {posts.map (post=> (
              <div key={post.id}>
                  <h1> {post.titulo} </h1> 
                  <p> {post.conteudo} </p>
              </div>

              // esse key={post.id} foi utilizado para resolver o warning
               // pois o react funciona com chave única para identificação de elementos de um objeto
           ))}
        </div>
       )
 }
}



export default App;
