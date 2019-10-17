import React, { Component } from 'react';

import Menu from '../../components/menu/Menu';
import paginaAnterior from '../../img/paginaAnterior.png';
import ListaService from '../../services/ListaService';
import './Lista.scss';
import incluir from '../../img/incluir.png';

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
        this.setState({ itensFiltrados });
    }

    render() {

        let { lista, itensFiltrados } = this.state;
        lista.itens = lista.itens ? lista.itens : [];
        console.log(lista);

        const listaItensFiltrados = itensFiltrados.map((item, key) => (
            <div key={key} className="itemFiltrado">
                <span>{item.descricao}</span>
                <input type="number" name="quantidade" id="quantidade" />
                <span>{item.unidade}</span>
                <button>
                    <img src={incluir} alt="Incluir" />
                </button>
            </div>
        ));

        return (
            <div>
                <Menu
                    logo={paginaAnterior}
                    paginaAnterior="/"
                    titulo="Minha lista" />

                <div className="conteiner">
                    <h3 id="nomeLista">{lista.nome}</h3>

                    <form>
                        <input
                            placeholder="Digite o item"
                            onChange={this.filtrarItens}
                            name="filtro"
                            type="text" />
                    </form>

                    <div className="listagem">
                        {listaItensFiltrados}
                    </div>
                </div>
            </div>
        );
    }
}
