import React, { Component } from 'react'

import Menu from '../../components/menu/Menu';
import icone from '../../img/paginaAnterior.png';
import ListaService from '../../services/ListaService';
import ROTAS from '../../constants/rotas';

export default class CriarLista extends Component {

    state = {
        nome: ''
    }

    aoAlterarNome = (event) => {
        const nome = event.target.value;
        this.setState({ nome });
    }

    salvar = (event) => {
        /**
         * Previne o comportamento padrão
         * do formulário, que é recarregar
         * a página.
         */
        event.preventDefault();

        const service = new ListaService();
        const lista = this.state;
        service.salvar(lista);

        /**
         * Faz o encaminhamento para a
         * página inicial do app.
         */
        this.props.history.push(ROTAS.INICIO);
    }

    render() {
        return (
            <div>
                <Menu
                    paginaAnterior="/"
                    titulo="Criar lista"
                    logo={icone} />

                <form id="formNovaLista" onSubmit={this.salvar}>
                    <input
                        onChange={this.aoAlterarNome}
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
