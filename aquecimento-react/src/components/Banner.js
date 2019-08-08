import React, { Component } from 'react';
import './Banner.css';

export default class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <span id="titulo">
                    <a href="/inicio">Aquecimento</a>
                </span>
                <ul id="menu">
                    <li>
                        <a href="/inicio">Início</a>
                    </li>
                    <li>
                        <a href="/sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="/contato">Contato</a>
                    </li>
                </ul>
            </div>
        );
    }
}
