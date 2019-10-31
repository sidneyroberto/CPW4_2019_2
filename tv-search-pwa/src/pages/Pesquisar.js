import React, { Component } from 'react';

import logo from '../img/logo.png';
import Header from '../components/Header';

export default class Pesquisar extends Component {
    render() {
        return (
            <div>
                <Header
                    enderecoPaginaAnterior="/"
                    logo={logo}
                    titulo="TV Search" />
            </div>
        )
    }
}
