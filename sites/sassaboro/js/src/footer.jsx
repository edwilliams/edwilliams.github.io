import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container bg-white pam">
                    <ul className="h-list">
                        <li><a href="javascript:void(0);" className="f_s">Terms of Service</a></li>
                        <li><a href="javascript:void(0);" className="f_s">Privacy Policy</a></li>
                        <li><a href="javascript:void(0);" className="f_s">About Us</a></li>
                        <li><p className="f_s">Copyright &copy; 2016</p></li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer;