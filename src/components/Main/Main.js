import React from 'react';
import '../../blocks/container.css';
import './Main.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
function Main(props) {
    return (
        <>
        <div className="background-wrapper">
            <Header shortenedHeaderWidth={props.shortenedHeaderWidth} mainPage={props.mainPage} loggedIn={props.loggedIn} onLoginButtonClick={props.onLoginButtonClick}></Header>
            <section className="main">
                <div className="container">
                    <h1 className="main__headline">Что творится в мире?</h1>
                    <p className="main__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своем личном кабинете.</p>
                    <SearchForm></SearchForm>
                </div>
            </section>
        </div>
        <NewsCardList news={props.news} mainPage={props.mainPage} loggedIn={props.loggedIn} handleMoreNewsButton={props.handleMoreNewsButton}></NewsCardList>
        <About></About>
        </>
    )
}
export default Main;