import React from 'react';
import './NewsCard.css';
import bookmarkPicture from '../../images/Group_12.png';
import bookmarkPictureActive from '../../images/Group_12-active.png';
import bookmarkPictureSaved from '../../images/Group_12-saved.png';
import deleteIcon from '../../images/Group_12-del.png';
import { Switch } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
function NewsCard(props) {

    const [hovered, setHovered] = React.useState(false);
    const [saved, setSaved] = React.useState(false);
    const [savedNewsHovered, setSavedNewsHovered] = React.useState(false);
    const {keyword, title, text, date, source, link, image} = props;
    const user = React.useContext(UserContext);
    let year = new Date(props.date).getFullYear();
    let month = new Date(props.date).getMonth();
    let day = new Date(props.date).getDay();
    if(month === 1) {
        month = "января";
    }
    if(month === 2) {
        month = "февраля";
    }
    if(month === 3) {
        month = "марта";
    }
    if(month === 4){
        month = "апреля";
    }
    if(month === 5) {
        month = "мая";
    } 
    if(month === 6) {
        month = "июня";
    }
    if(month === 7) {
        month = "июля";
    }
    if(month === 8) {
        month = "августа";
    }
    if(month === 9) {
        month = "сентября";
    }
    if(month === 10) {
        month = "октября";
    }
    if(month === 11) {
        month = "ноября";
    }
    if(month === 12) {
        month = "декабря"
    }

    let finalDate = `${day} ${month}, ${year}`;

    function changeImageSrcOnHoverToActive(event) {
        event.target.src = bookmarkPictureActive;
        setHovered(true);
    }
    function changeImageSrcOnHoverBack(event) {
        event.target.src = bookmarkPicture;
        setHovered(false);
    }
    function showDeleteMessageOnHover() {
        setSavedNewsHovered(true);
    }
    function removeDeleteMessageOnhoverBack() {
        setSavedNewsHovered(false);
    }
    function openLoginPopup() {
        props.onLogoutBookmarkButtonClick();
    }
    function savePost() {
        setSaved(!saved);
        props.onSaveArticle({keyword, title, text, date, source, link, image});
    }
    function deletePost() {
        
        // props.onDeleteArticle
        if(props.mainPage) {
            const articleToDelete = props.favourites.find((favourite) => {
                return favourite.link === link;
            });
            props.onDeleteArticle(articleToDelete._id)
            .then(() => {
                setSaved(!saved);
                const newSavedArticlesArray = props.favourites.filter((favourite) => {
                    return favourite._id !== articleToDelete._id;
                });
                props.refreshSavedNewsArray(newSavedArticlesArray);
            })
            .catch((err) => {
                console.log(err);
            })
        } else {
            props.onDeleteArticle(props.id)
            .then(() => {
                const newSavedArticlesArray = props.news.filter((favourite) => {
                    return favourite._id !== props.id;
                });
                props.refreshSavedNewsArray(newSavedArticlesArray);
            })
            .catch((err) => {
                console.log(err);
            })
        }

        // props.onDeleteArticle(props.id);
    }
    
    return (
        <li className="cards__list-element">
            {props.mainPage ? "" : <span className="cards__list-element-span cards__list-element-span_keyword">{props.keyword}</span>}
            {props.mainPage ? <span className={hovered && !user && !saved ? "cards__list-element-span cards__list-element-span_active" : "cards__list-element-span"}>Войдите, чтобы сохранять статьи</span> : <span className={savedNewsHovered ? "cards__list-element-span cards__list-element-span_active" : "cards__list-element-span"}>Удалить из сохраненных</span>} 
            <img className="cards__list-element-bookmark" src={props.mainPage ? (!saved ? bookmarkPicture : bookmarkPictureSaved) : (deleteIcon)} onMouseOver={!saved && props.mainPage ? changeImageSrcOnHoverToActive : showDeleteMessageOnHover} onMouseOut={!saved && props.mainPage ? changeImageSrcOnHoverBack : removeDeleteMessageOnhoverBack} onClick={props.mainPage ? user ? !saved ? savePost : deletePost : openLoginPopup : deletePost}></img>
            <img className="cards__list-element-image" src={props.image} alt="каритнка новости"></img>
            <div className="cards__list-element-wrapper">
                <p className="cards__list-element-date">{finalDate}</p>
                <h3 className="cards__list-element-heading">{props.title}</h3>
                <p className="cards__list-element-text">{props.text}</p>
                <p className="cards__list-element-source">{props.source}</p>
            </div>
        </li>
    )
}
export default NewsCard;