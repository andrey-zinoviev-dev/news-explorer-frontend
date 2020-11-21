import React from 'react';
import './NewsCardList.css';
import '../../blocks/container.css';
import NewsCard from '../NewsCard/NewsCard';
import Preloader from '../Preloader/Preloader';
function NewsCardList(props) {
    const [dataIsLoading, setDataIsLoading] = React.useState(false);
    return (
        <section className={props.mainPage ? "cards" : "cards cards_type_saved-news"}>
            <div className="container">
                <div className="cards__wrapper">
                        {!dataIsLoading ? (<>
                            {props.mainPage ? <h2 className="cards__heading">Результаты поиска</h2> : ""}
                            <ul className="cards__list">
                            {props.mainPage ? props.news.map((oneNews, i) => {
                                return <NewsCard loggedIn={props.loggedIn} key={oneNews.id} image={oneNews.image} date={oneNews.date} title={oneNews.title} text={oneNews.text} source={oneNews.source} mainPage={true}></NewsCard>
                            }) : props.savedNews.map((oneNews, i) => {
                                return <NewsCard loggedIn={props.loggedIn} key={oneNews.id} image={oneNews.image} date={oneNews.date} title={oneNews.title} text={oneNews.text} source={oneNews.source} keyword={oneNews.keyword}></NewsCard>
                            })}
                        </ul>
                        <button className={props.mainPage ? "cards__resubmit" : "cards__resubmit cards__resubmit_type_saved-news"} onClick={props.handleMoreNewsButton}>Показать еще</button> </>) : (<Preloader></Preloader>)}
                        {/* {props.mainPage ? <h2 className="cards__heading">Результаты поиска</h2> : ""}
                        <ul className="cards__list">
                            {props.mainPage ? props.news.map((oneNews, i) => {
                                return <NewsCard loggedIn={props.loggedIn} key={oneNews.id} image={oneNews.image} date={oneNews.date} title={oneNews.title} text={oneNews.text} source={oneNews.source} mainPage={true}></NewsCard>
                            }) : props.savedNews.map((oneNews, i) => {
                                return <NewsCard loggedIn={props.loggedIn} key={oneNews.id} image={oneNews.image} date={oneNews.date} title={oneNews.title} text={oneNews.text} source={oneNews.source} keyword={oneNews.keyword}></NewsCard>
                            })}
                        </ul>
                        <button className={props.mainPage ? "cards__resubmit" : "cards__resubmit cards__resubmit_type_saved-news"} onClick={props.handleMoreNewsButton}>Показать еще</button> */}
                </div>
            </div>
        </section>
    )
}

export default NewsCardList;