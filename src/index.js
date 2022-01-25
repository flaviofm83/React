import React from 'react'; //biblioteca react
import ReactDOM from 'react-dom'; //responsável por gerenciar todos os elementos do react
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//estamos mandando o componente App para ser renderizado lá na div root do inndex.html
ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
