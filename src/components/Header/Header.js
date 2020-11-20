import React from 'react';
import './Header.css';
import '../../blocks/container.css';
import logoutImage from '../../images/logout-white.png';
import logoutImageBlack from '../../images/logout.png';
import menuLogo from '../../images/menu.png';
import menuLogoBlack from '../../images/menu_black.png';
function Header (props) {
    const [clickedMenuLogo, setClickedMenuLogo] = React.useState(false);

    function showMenuOnCLick() {
        setClickedMenuLogo(!clickedMenuLogo);
    }

    return (
        <>
        <header className={props.mainPage ? `header ${clickedMenuLogo ? "header_type_authorization_status_active" : "header"}` : "header header_type_saved-news"}>
            <div className="container">
                <div className="header__wrapper">
                    <a href="/" className="header__link_status_active"><span className={props.mainPage ? "header__title-span" : "header__title-span header__title-span_type_saved-news"}>NewsExplorer</span></a>
                    {props.shortenedHeaderWidth ? <img src={props.mainPage ? menuLogo : menuLogoBlack} onClick={showMenuOnCLick}></img> : <nav className="header__menu">
                        {props.loggedIn ? <><a href="/" className={props.mainPage ? "header__link header__link_status_active" : "header__link header__link_type_saved-news"}>Главная</a><a href="/saved-news" className={props.mainPage? "header__link" : "header__link header__link_type_saved-news header__link_type_saved-news_status_active"}>Сохраненные статьи</a></> : <a className="header__link header__link_status_active">Главная</a>}
                        {props.loggedIn ? <button className={props.mainPage ? "header__login" : "header__login header__login_type_saved-news"}>Грета <img src={props.mainPage? logoutImage : logoutImageBlack}></img></button> : <button className="header__login" onClick={props.onLoginButtonClick}>Авторизоваться</button>}
                    </nav>}
                </div>
            </div>
        </header>
        <div className={clickedMenuLogo && props.shortenedHeaderWidth ? "header header_type_authorization header_type_authorization_status_active" : "header header_type_authorization"}>
            <div className="header__wrapper">
            {clickedMenuLogo && props.shortenedHeaderWidth? <nav className="header__menu">
        {props.loggedIn ? <><a href="/" className={props.mainPage && clickedMenuLogo? "header__link header__link_status_active" : "header__link header__link_type_saved-news"}>Главная</a><a href="/saved-news" className={props.mainPage? "header__link" : "header__link header__link_type_saved-news header__link_type_saved-news_status_active"}>Сохраненные статьи</a></> : <a className="header__link header__link_status_active">Главная</a>}
        {props.loggedIn ? <button className={props.mainPage ? "header__login" : "header__login header__login_type_saved-news"}>Грета <img src={props.mainPage? logoutImage : logoutImageBlack}></img></button> : <button className="header__login" onClick={props.onLoginButtonClick}>Авторизоваться</button>}
        </nav> : ""}
        </div>
            </div>
            
        </>
    )
}

export default Header;