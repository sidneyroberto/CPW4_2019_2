import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Pesquisar from './pages/Pesquisar';
import VisualizarSerie from './pages/VisualizarSerie';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route
                exact
                path="/"
                component={Pesquisar} />
            <Route
                exact
                path="/serie"
                component={VisualizarSerie} />
        </Switch>
    </BrowserRouter>
);

export default Rotas;