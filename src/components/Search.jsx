import React from 'react';
import { browserHistory as history } from 'react-router';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    _handleSubmit(e) {
        e.preventDefault();
        history.push(`/user/${this.refs.userInput.value}`)
    }

    render() {
        return (
            <div className="search-page">
                <form onSubmit={this._handleSubmit}>
                    <label for=""></label>
                    <input ref="userInput" className="search-page__input" type="text" placeholder="Nome do usuário" />
                    <button className="search-page__button">Buscar</button>
                </form>                
            </div>
        );
    }
};

export default Search;
