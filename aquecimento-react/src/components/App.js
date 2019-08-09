import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import './App.css';
import Banner from './Banner';
import Inicio from './Inicio';
import Sobre from './Sobre';
import Contato from './Contato';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Banner />

        <div className="conteudo">
          <Switch>
            <Route path="/inicio" component={Inicio} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/contato" component={Contato} />
            <Redirect to="/inicio" />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
