import React from 'react';
import './Navigation.css';
import gitHubLogo from '../../images/github.png';
import facebookLogo from '../../images/fb.png';
function Navigation() {
    function openLinkInNewTab(url) {
        window.open(url, '_blank');
    }
    const links = document.querySelectorAll('.link_type_to-new-tab');
    links.forEach((link) => {
        console.log(link.href);
    })
    return (
        <>
        <nav className="footer__wrapper-menu-navigation">
            <ul className="footer__wrapper-menu-navigation-list">
                <li className="footer__wrapper-menu-navigation-list-element"><a className="link" href="/">Главная</a></li>
                <li className="footer__wrapper-menu-navigation-list-element"><a className="link link_type_to-new-tab" href="#footer" onClick={() => {openLinkInNewTab('https://praktikum.yandex.ru/')}}>Яндекс.Практикум</a></li>   
            </ul>
        </nav>
        <a className="link link_type_to-new-tab" href="#footer" onClick={() => {openLinkInNewTab('https://facebook.com/')}}><img src={facebookLogo} alt="логотип facebook"></img></a>
        <a className="link link_type_to-new-tab" href="#footer" onClick={() => {openLinkInNewTab('https://github.com/')}}><img src={gitHubLogo} alt="логотип github"></img></a>
        </>
    )
}

export default Navigation;