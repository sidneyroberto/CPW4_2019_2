import React, { Component } from 'react';

import logo from '../img/paginaAnterior.png';
import Header from '../components/Header';

export default class VisualizarSerie extends Component {
    render() {
        return (
            <div>
                <Header
                    enderecoPaginaAnterior="/"
                    logo={logo}
                    titulo="Visualizar série" />
            </div>
        )
    }
}
