import React, { Component } from 'react';

export default class Sobre extends Component {
    render() {
        return (
            <div>
                <h3>Sobre</h3>
                <p>
                    Este projeto foi desenvolvido com
                    a biblioteca
                     <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org">React</a>.
                </p>
                <p>
                    Este exemplo foi criado em sala
                    de aula na disciplina Construção
                    de Páginas Web IV.
                </p>
            </div>
        );
    }
}
