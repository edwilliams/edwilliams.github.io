import React, {Component} from 'react';

class SectionLogo extends Component {
    render() {
        return (
            <section id="logo" className="container bg-white ptl mbxl mtm">
                <div className="stripe mbm"></div>
                <div className="logo typo-center">
                    <h4 className="f_l">WEST AFRICAN SUNSHINE</h4>
                    <img className="pvs" src="img/logo.png"></img>
                    <h5 className="f_m mbs">FERMENTED GAMBIAN BONNETS</h5>
                    <h6 className="f_r">CHILLI SAUCE</h6>
                </div>
                <div className="stripe mtm"></div>
            </section>
        )
    }
}

export default SectionLogo;