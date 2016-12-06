import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div id="header-inner">
                    <div className="container bg-white phs">
                        <div className="grid">
                            <div className="unit size1of6 mobile1of1">
                                <div className="logo typo-center">
                                    <img className="pvs" src="img/logo.png"></img>
                                </div>
                            </div>
                            <div className="unit size5of6 mobile1of1">
                                <nav className="nav-main plm pts">
                                    <ul>
                                        <li className="mobile1of1"><a href="javascript:void(0);" data-id="story">story of sasaborra</a></li>
                                        <li className="mobile1of1"><a href="javascript:void(0);" data-id="products">products</a></li>
                                        <li className="mobile1of1"><a href="javascript:void(0);" data-id="shop">shop</a></li>
                                        <li className="mobile1of1"><a href="javascript:void(0);" data-id="stockists">stockists</a></li>
                                        <li className="mobile1of1"><a href="javascript:void(0);" data-id="contact">contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-fixed"></div>
            </header>
        )
    }
}

export default Header;