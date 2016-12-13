import React, {Component} from 'react';

class Product extends Component {
    render() {
        return (
            <div className="unit size1of2">
                <h3 className="f_m mbs pbs">{this.props.title}</h3>
                <figure>
                    <img className="animated mtm" src="img/bottle-small.png" />
                </figure>
            </div>
        )
    }
}

export default Product;