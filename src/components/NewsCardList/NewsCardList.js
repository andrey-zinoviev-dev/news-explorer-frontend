import React from 'react';
import './NewsCardList.css';
import '../../blocks/container.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {

    return (
        <section className={props.mainPage ? "main__cards" : "main__cards main__cards_type_saved-news"}>
            <div className="container">
                <div className="main__cards-wrapper">
                        {props.mainPage ? <h2 className="main__cards-heading">Результаты поиска</h2> : ""}
                        <ul className="main__cards-list">
                            {props.mainPage ? props.news.map((oneNews, i) => {
                                return <NewsCard loggedIn={props.loggedIn} key={oneNews.id} image={oneNews.image} date={oneNews.date} title={oneNews.title} text={oneNews.text} source={oneNews.source} mainPage={true}></NewsCard>
                            }) : props.savedNews.map((oneNews, i) => {
                                return <NewsCard loggedIn={props.loggedIn} key={oneNews.id} image={oneNews.image} date={oneNews.date} title={oneNews.title} text={oneNews.text} source={oneNews.source} keyword={oneNews.keyword}></NewsCard>
                            })}
                        </ul>
                        <button className={props.mainPage ? "main__cards-resubmit" : "main__cards-resubmit main__cards-resubmit_type_saved-news"} onClick={props.handleMoreNewsButton}>Показать еще</button>
                </div>
            </div>
        </section>
    )
}

export default NewsCardList;