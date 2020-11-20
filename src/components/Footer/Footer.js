import React from 'react';
import './Footer.css';
import '../../blocks/container.css';
import Navigation from '../Navigation/Navigation';
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <p className="footer__subtitle">© 2020 Supersite, Powered by News API</p>
                    <div className="footer__nav">
                        <Navigation></Navigation>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;