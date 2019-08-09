import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Banner.css';

export default class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <span id="titulo">
                    <Link to="/inicio">Aquecimento</Link>
                </span>
                <ul id="menu">
                    <li>
                        <Link to="/inicio">Início</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
