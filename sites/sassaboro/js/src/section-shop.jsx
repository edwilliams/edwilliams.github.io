import React, {Component} from 'react';

class SectionShop extends Component {
    render(props) {
        return (
            <section id="shop" className="container bg-white">
                <h1 className="bg-ribbon typo-center mbm">{this.props.title}</h1>
                <div className="grid grid-vl typo-center">
                    <div className="unit size3of4">
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionShop;