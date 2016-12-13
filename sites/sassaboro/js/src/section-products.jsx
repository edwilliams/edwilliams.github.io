import React, {Component} from 'react';

class SectionProducts extends Component {
    render() {
        return (
            <section id="products" className="container bg-white">
                <h1 className="bg-ribbon typo-center mbm">{this.props.title}</h1>
                <div className="grid typo-center">
                    {this.props.children}
                </div>
            </section>
        )
    }
}

export default SectionProducts;