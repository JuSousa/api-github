import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div className="main-app">
                <header className="main-header">
                    <nav class="navbar navbar-default">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <h1><img src="http://dsbjuliana.com.br/github/images/logo-github.png" alt="GitHub"></img></h1>
                            </div>
                        </div>
                    </nav>                    
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
};

export default App;