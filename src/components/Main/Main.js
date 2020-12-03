import React from 'react';
import '../../blocks/container.css';
import './Main.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import UserContext from '../../contexts/UserContext';
function Main(props) {
    const user = React.useContext(UserContext);
    
    return (
        <>
        <div className="background-wrapper">
            <Header shortenedHeaderWidth={props.shortenedHeaderWidth} mainPage={props.mainPage} user={user} onLoginButtonClick={props.onLoginButtonClick} onLogoutButtonClick={props.onLogoutButtonClick}></Header>
            <section className="main">
                <div className="container">
                    <h1 className="main__headline">Что творится в мире?</h1>
                    <p className="main__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своем личном кабинете.</p>
                    <SearchForm onSearchSubmit={props.onSearchSubmit}></SearchForm>
                </div>
            </section>
        </div>
        {props.isSearchActive ? <NewsCardList newsApiServerError={props.newsApiServerError} onSubmitError={props.onSubmitError} keyword={props.keyword} refreshSavedNewsArray={props.refreshSavedNewsArray} favourites={props.favourites} onDeleteArticle={props.onDeleteArticle} onSaveArticle={props.onSaveArticle} onLogoutBookmarkButtonClick={props.onLoginButtonClick} articlesNotFound={props.articlesNotFound} isPreloaderActive={props.isPreloaderActive} news={props.news} mainPage={props.mainPage}></NewsCardList> : ""}
        <About></About>
        </>
    )
}
export default Main;