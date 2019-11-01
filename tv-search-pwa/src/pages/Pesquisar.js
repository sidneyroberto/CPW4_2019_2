import React, { Component } from 'react';

import logo from '../img/logo.png';
import imgDefault from '../img/imgDefault.png';
import Header from '../components/Header';
import SeriesService from '../services/SeriesService';

export default class Pesquisar extends Component {

    constructor() {
        super();

        this.state = {
            series: []
        }

        this.service = new SeriesService();
    }

    pesquisar = event => {
        const consulta = event.target.value;
        this.service
            .pesquisar(consulta)
            .then(resposta => this.setState({
                series: resposta.data
            }))
            .catch(erro => console.log(erro));
    }

    render() {
        const { series } = this.state;
        const listaSeries = series.map(serie => {
            let imagem = imgDefault;
            if (serie.show.image && serie.show.image.medium) {
                imagem = serie.show.image.medium;
            }

            return (
                <div key={serie.show.id} className="serie">
                    <img
                        src={imagem}
                        alt="Cartaz da série" />
                    <span>{serie.show.name}</span>
                </div>
            )
        });

        return (
            <div>
                <Header
                    enderecoPaginaAnterior="/"
                    logo={logo}
                    titulo="TV Search" />

                <div id="areaPesquisa">
                    <input
                        id="campoPesquisa"
                        onChange={this.pesquisar}
                        placeholder="Digite o nome da série"
                        type="text" />
                </div>

                <div id="areaResultados">
                    {listaSeries}
                </div>

            </div>
        )
    }
}
