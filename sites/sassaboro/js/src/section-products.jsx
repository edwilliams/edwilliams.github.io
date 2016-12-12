import React, {Component} from 'react';

// <h1 className="bg-ribbon typo-center mvm">products</h1>
class SectionProducts extends Component {
    render() {
        return (
            <section id="products" className="phm">
                <h1 className="bg-ribbon typo-center mvm">{this.props.title}</h1>
                <div className="grid typo-center">
                    {this.props.children}
                </div>
            </section>
        )
    }
}

export default SectionProducts;