import React, {Component} from 'react';

class Main extends Component {
    render() {
        return (
            <main className="main">
                <div className="container bg-white pam">
                    {this.props.children}
                </div>
            </main>
        )
    }
}

export default Main;