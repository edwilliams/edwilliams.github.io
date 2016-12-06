import React, {Component} from 'react';
import Product from './product.jsx';

// <h1 className="bg-ribbon typo-center mvm">products</h1>
class SectionProducts extends Component {
    render() {
        return (
            <section id="products" className="phm">
                <div className="grid typo-center">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </section>
        )
    }
}

export default SectionProducts;