import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

function CadastroVideo() {
  return (
    <div>
      Página Cadastro de Vídeos
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="cadastro/video" component={CadastroVideo} />
      <Route path="/" component={ App } exact/>        
    </Switch>
   
  </BrowserRouter>,
  document.getElementById('root')
);