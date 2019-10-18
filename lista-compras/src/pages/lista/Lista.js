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
            itensFiltrados: [],
            itemSelecionado: {}
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

    /**
     * Inclui um novo item na lista
     */
    incluirItem = (item, key) => {
        let { lista } = this.state;
        /**
         * Se a lista já possui o vetor de
         * itens, mantém o vetor. Caso contrário,
         * cria o vetor de itens na lista.
         */
        lista.itens = lista.itens ? lista.itens : [];
        // Inclui o novo item
        const descricao = item.descricao;
        const resposta = lista.itens.find(
            item => descricao === item.descricao
        );
        if (!resposta) {
            let quantidade = document.getElementById(`quantidade${key}`).value;
            item.quantidade = parseFloat(quantidade);
            lista.itens.push(item);
        }
        this.setState({ lista });
    }

    render() {

        let {
            lista,
            itensFiltrados
        } = this.state;
        console.log(lista);

        const listaItensFiltrados = itensFiltrados.map((item, key) => (
            <div key={key} className="itemFiltrado">
                <span>{item.descricao}</span>
                <input
                    value={this.defaultValue}
                    ref={this.input}
                    type="number"
                    name={`quantidade${key}`}
                    min="0.001"
                    id={`quantidade${key}`} />
                <span>{item.unidade}</span>
                <button onClick={() => this.incluirItem(item, key)}>
                    <img src={incluir} alt="Incluir" />
                </button>
            </div>
        ));

        const listaItens = lista.itens ? lista.itens.map((item, key) => (
            <li key={key}>
                {`${item.quantidade} ${item.unidade} de ${item.descricao}`}
            </li>
        )) : [];

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

                    <ul>
                        {listaItens}
                    </ul>
                </div>
            </div>
        );
    }
}
