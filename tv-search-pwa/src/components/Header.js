import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = props => (
    <div className="header">
        <Link to={props.enderecoPaginaAnterior}>
            <img src={props.logo} alt="Logo" />
        </Link>

        <span>{props.titulo}</span>
    </div>
);

export default Header;