import React from 'react';
import './NewsCardList.css';
import '../../blocks/container.css';
import NewsCard from '../NewsCard/NewsCard';
import Preloader from '../Preloader/Preloader';
import notFoundLogo from '../../images/not-found_v1.png';
function NewsCardList(props) {
    const [moreButtonDisabled, setMoreButtonDisabled] = React.useState(false);
    const [resultsArray, setResultsArray] = React.useState([]);
    const [index, setIndex] = React.useState(3);

    React.useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        setResultsArray(props.news.slice(0, 3));

        return function cleanup() {
            abortController.abort()
        }
        
    }, [props.news]);

    function showMorePosts() {
        let array = props.news.slice(index, index + 3);
        setResultsArray([...resultsArray, ...array]);
        setIndex(index + 3);
    }
    return (
        <section className={props.mainPage ? "cards" : "cards cards_type_saved-news"}>
            <div className="container">
                {props.isPreloaderActive ? <Preloader /> : <div className={!props.articlesNotFound ? "cards__wrapper" : "cards__wrapper cards__wrapper_search_empty"}>
                        {!props.articlesNotFound ? "" : <img src={notFoundLogo}></img>}
                        {!props.articlesNotFound ? props.mainPage ? (<h2 className="cards__heading">Результаты поиска</h2>) : ("") : <h3 className="cards__heading_search_empty">Ничего не найдено</h3>}
                        {!props.articlesNotFound ? "" : <p className="cards__span">К сожалению по вашему запросу ничего не найдено.</p>}
                        <ul className="cards__list">
                            {props.mainPage ? resultsArray !== null ? resultsArray.map((oneNews, i) => {
                                return <NewsCard refreshSavedNewsArray={props.refreshSavedNewsArray} favourites={props.favourites} onDeleteArticle={props.onDeleteArticle} onSaveArticle={props.onSaveArticle} onLogoutBookmarkButtonClick={props.onLogoutBookmarkButtonClick} loggedIn={props.loggedIn} key={oneNews.url} image={oneNews.urlToImage} date={oneNews.publishedAt} title={oneNews.title} text={oneNews.description} source={oneNews.source.name} link={oneNews.url} mainPage={true} keyword={props.keyword}></NewsCard>
                            }): "" : props.news.map((oneNews, i) => {
                                return <NewsCard refreshSavedNewsArray={props.refreshSavedNewsArray} news={props.news} onDeleteArticle={props.onDeleteArticle} loggedIn={props.loggedIn} key={oneNews._id} id={oneNews._id} image={oneNews.image} date={oneNews.date} title={oneNews.title} text={oneNews.text} source={oneNews.source} keyword={oneNews.keyword}></NewsCard>
                            })}
                        </ul>
                        {!props.articlesNotFound && !moreButtonDisabled ? <button className={props.mainPage ? "cards__resubmit" : "cards__resubmit cards__resubmit_type_saved-news"} onClick={showMorePosts}>Показать еще</button> : ""}
                </div>}
            </div>
        </section>
    )
}

export default NewsCardList;