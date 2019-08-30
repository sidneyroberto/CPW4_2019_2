import React, { Component } from 'react'

import Menu from '../menu/Menu';
import icone from '../../img/paginaAnterior.png';

export default class CriarLista extends Component {

    state = {
        nome: ''
    };

    render() {
        return (
            <div>
                <Menu
                    paginaAnterior="/"
                    titulo="Criar lista"
                    logo={icone} />

                <form id="formNovaLista">
                    <input
                        type="text"
                        name="nome"
                        value={this.state.nome}
                        required
                        placeholder="Digite o nome da lista" />
                    <input type="submit" value="Criar" />
                </form>
            </div>
        )
    }
}
