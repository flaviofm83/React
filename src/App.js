import './App.css';
import { Component } from 'react';


class App extends Component {

state = {
   cont: 0,
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

timeoutUpdate = null;
//Esse componentDidMount é executado só uma vez (quando ele é criado)
componentDidMount(){ //quando a gente abre a página a primeira vez ou dá um f5, esse método e chamado automaticamente
   this.mudaTimeout();
}

//Esse componentDidMount é executado sempre que muda de estado
componentDidUpdate(){
   this.mudaTimeout();
}

componentWillUnmount(){
   clearTimeout(this.timeoutUpdate);
}

mudaTimeout=()=>{

   const {posts, cont} = this.state; //trouxemos os estados (ou seja, os elementos posts e cont) para dentro do método
   posts[0].titulo = "Esse título mudou" //fizemos a alteração do título do primeiro elemento do array
   this.timeoutUpdate=setTimeout (()=>{
      this.setState({posts, cont: cont+1});//Atualizamos o estado com a função setState, mostrando o título alterado e incrementando o contador
   },2000);

}


 render(){
    const {posts, cont}= this.state; //agora posts  e cont estão dentro de this.state;
  return (
        <div className="App">
           <h1>{cont}</h1>
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
