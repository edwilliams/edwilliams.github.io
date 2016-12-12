import React, {Component} from 'react';

class SectionContact extends Component {
    render() {
        return (
            <section id="contact" className="phm">
                <h1 className="bg-ribbon typo-center mvm">{this.props.title}</h1>
                <div className="grid grid-vl typo-center">
                    <div className="unit size3of4">
                        <p className="mbm">{this.props.text}</p>
                        <a href="javascript:void(0);"><i className="mrm f_l fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="javascript:void(0);"><i className="mrm f_l fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="javascript:void(0);"><i className="mrm f_l fa fa-twitter" aria-hidden="true"></i></a>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionContact;