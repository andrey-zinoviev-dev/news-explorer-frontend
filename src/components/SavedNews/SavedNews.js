import React from 'react';
import './SavedNews.css';
import '../../blocks/container.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import UserContext from '../../contexts/UserContext';
function SavedNews(props) {
    
    const user = React.useContext(UserContext);
    let keywordsArray = [];

    props.news.forEach((article) => {
        keywordsArray.push(article.keyword);
    });

    let filteredKeywordsArray = keywordsArray.filter((keyword, index, array) => {
        return array.indexOf(keyword) === index;
    })
    let finalKeywordsArray = filteredKeywordsArray.slice();
    
    const firstKeyword = finalKeywordsArray.splice(0, 1).join();
    const secondKeyword = finalKeywordsArray.splice(0, 1).join();
    const thirdKeyword = finalKeywordsArray.splice(0, 1).join();
    let otherKeywords;

    if(finalKeywordsArray.length === 1) {
        otherKeywords = `${finalKeywordsArray.length}-м другим`;
    }
    if(finalKeywordsArray.length > 1 && finalKeywordsArray.length < 5) {
        otherKeywords = `${finalKeywordsArray.length}-мя другими`;
    }
    if(finalKeywordsArray.length > 5 && finalKeywordsArray.length < 22) {
        otherKeywords = `${finalKeywordsArray.length}-ю другими`
    }

    return (
        <>
       <SavedNewsHeader user={user} shortenedHeaderWidth={props.shortenedHeaderWidth} onLogoutButtonClick={props.onLogoutButtonClick}></SavedNewsHeader>
       <section className="saved-news">
           <div className="container">
               <div className='saved-news__wrapper'>
                    <p className="saved-news__subtitle">Сохраненные статьи</p>
                    <h2 className="saved-news__heading">{user ? user.name : ""}, у вас {props.news.length} сохраненных {props.news.length > 0 && props.news.length<5 ? "статьи" : "статей"}</h2>
                    <p className="saved-news__subtitle saved-news__subtitle_place_bottom">По ключевым словам: <span className="span_type_bold">{firstKeyword}</span>, <span className="span_type_bold">{secondKeyword}</span> и <span className="span_type_bold">{filteredKeywordsArray.length > 3 ? otherKeywords : thirdKeyword}</span></p>
               </div>
           </div>
       </section>
       <NewsCardList news={props.news} onDeleteArticle={props.onDeleteArticle} refreshSavedNewsArray={props.refreshSavedNewsArray}></NewsCardList>
        </>
    )
}

export default SavedNews;