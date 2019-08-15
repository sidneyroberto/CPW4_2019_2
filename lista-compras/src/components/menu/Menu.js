import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <span>{this.props.titulo}</span>
            </div>
        );
    }
}
