import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/" component={ Home } exact/>
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={()=>(<h1>Erro 404</h1>)}/>       
    </Switch>
   
  </BrowserRouter>,
  document.getElementById('root')
);