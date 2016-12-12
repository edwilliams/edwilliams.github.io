import React, {Component} from 'react';

class SectionStockists extends Component {
    render() {
        return (
            <section id="stockists" className="phm">
                <h1 className="bg-ribbon typo-center mvm">{this.props.title}</h1>
                <div className="grid grid-vl typo-center">
                    <div className="unit size3of4">
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionStockists;