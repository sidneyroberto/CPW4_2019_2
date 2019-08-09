import React, { Component } from 'react';

import ItemContato from './ItemContato';
import email from '../img/email.png';
import fone from '../img/fone.png';
import endereco from '../img/endereco.png';

export default class Contato extends Component {
    render() {
        return (
            <div>
                <h3>Contato</h3>
                <ItemContato
                    icone={endereco}
                    descricao="Endereço"
                    contato="Rua 8 de novembro, 22" />
                <ItemContato
                    icone={fone}
                    descricao="Telefone"
                    contato="(67) 3333-3333" />
                <ItemContato
                    icone={email}
                    descricao="E-mail"
                    contato="cpw4@email.com" />
            </div>
        );
    }
}
