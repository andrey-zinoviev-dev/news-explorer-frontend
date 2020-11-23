import React from 'react';
import './Navigation.css';
import gitHubLogo from '../../images/github.png';
import facebookLogo from '../../images/fb.png';
function Navigation() {
    function openLinkInNewTab(url) {
        window.open(url, '_blank');
    }

    return (
        <>
        <nav className="footer__nav-menu-navigation">
            <ul className="footer__nav-menu-navigation-list">
                <li className="footer__nav-menu-navigation-list-element"><a className="footer__nav-menu-navigation-list-element-link" href="/">Главная</a></li>
                <li className="footer__nav-menu-navigation-list-element"><a className="footer__nav-menu-navigation-list-element-link footer__nav-menu-navigation-list-element-link_type_to-new-tab" href="#footer" onClick={() => {openLinkInNewTab('https://praktikum.yandex.ru/')}}>Яндекс.Практикум</a></li>   
            </ul>
        </nav>
        <a className="footer__nav-menu-navigation-list-element-link footer__nav-menu-navigation-list-element-link_type_to-new-tab" href="#footer" onClick={() => {openLinkInNewTab('https://facebook.com/')}}><img src={facebookLogo} alt="логотип facebook"></img></a>
        <a className="footer__nav-menu-navigation-list-element-link footer__nav-menu-navigation-list-element-link_type_to-new-tab" href="#footer" onClick={() => {openLinkInNewTab('https://github.com/')}}><img src={gitHubLogo} alt="логотип github"></img></a>
        </>
    )
}

export default Navigation;