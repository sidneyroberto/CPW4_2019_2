import React, { Component } from 'react';

import Menu from '../../components/menu/Menu';
import paginaAnterior from '../../img/paginaAnterior.png';
import ListaService from '../../services/ListaService';

export default class Lista extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lista: this.props.location.state.lista,
            itensFiltrados: []
        };

        this.service = new ListaService();
    }

    /**
     * Aplica o filtro do usuário
     * nos itens de lista
     */
    filtrarItens = (event) => {
        // Pega o valor digitado no campo de filtro
        let filtro = event.target.value;
        let itensFiltrados =
            this.service.recuperarItens(filtro);
        console.log(itensFiltrados);
    }

    render() {

        let { lista } = this.state;

        return (
            <div>
                <Menu
                    logo={paginaAnterior}
                    paginaAnterior="/"
                    titulo="Minha lista" />

                <h3 id="nomeLista">{lista.nome}</h3>

                <form>
                    <input
                        onChange={this.filtrarItens}
                        name="filtro"
                        type="text" />
                </form>

            </div>
        );
    }
}
