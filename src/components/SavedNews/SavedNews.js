import React from 'react';
import './SavedNews.css';
import '../../blocks/container.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import UserContext from '../../contexts/UserContext';
function SavedNews(props) {
    
    const user = React.useContext(UserContext);
    
    let keywordsArray = [];
    props.savedNews.forEach((article, i) => {
        keywordsArray.push(article.keyword);
    });
    const finalKeywordsArray = keywordsArray.filter((keyword, i, array) => {
        return array.indexOf(keyword) === i;
    })

    const firstKeyword = finalKeywordsArray.splice(0,1).join();
    
    const secondKeyword = finalKeywordsArray.splice(0,1).join();
    return (
        <>
       <SavedNewsHeader user={user} shortenedHeaderWidth={props.shortenedHeaderWidth} onLogoutButtonClick={props.onLogoutButtonClick}></SavedNewsHeader>
       <section className="saved-news">
           <div className="container">
               <div className='saved-news__wrapper'>
                    <p className="saved-news__subtitle">Сохраненные статьи</p>
                    <h2 className="saved-news__heading">{user ? user.name : ""}, у вас {props.savedNews.length} сохраненных {props.savedNews.length > 0 && props.savedNews.length<5 ? "статьи" : "статей"}</h2>
                    <p className="saved-news__subtitle saved-news__subtitle_place_bottom">По ключевым словам: <span className="span_type_bold">{firstKeyword}</span>, <span className="span_type_bold">{secondKeyword}</span> и <span className="span_type_bold">{finalKeywordsArray.length}-м другим</span></p>
               </div>
           </div>
       </section>
       <NewsCardList savedNews={props.savedNews}></NewsCardList>
        </>
    )
}

export default SavedNews;