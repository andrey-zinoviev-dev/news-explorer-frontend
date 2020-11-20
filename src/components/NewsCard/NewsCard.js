import React from 'react';
import './NewsCard.css';
import bookmarkPicture from '../../images/Group_12.png';
import bookmarkPictureActive from '../../images/Group_12-active.png';
import bookmarkPictureSaved from '../../images/Group_12-saved.png';
import deleteIcon from '../../images/Group_12-del.png';

function NewsCard(props) {

    const [hovered, setHovered] = React.useState(false);
    const [saved, setSaved] = React.useState(false);
    const [savedNewsHovered, setSavedNewsHovered] = React.useState(false);

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
    function savePost() {
        setSaved(!saved);
    }
    return (
        <li className="main__cards-list-element">
            {props.mainPage ? "" : <span className="main__cards-list-element-span main__cards-list-element-span_keyword">{props.keyword}</span>}
            {props.mainPage ? <span className={hovered && !props.loggedIn && !saved ? "main__cards-list-element-span main__cards-list-element-span_active" : "main__cards-list-element-span"}>Войдите, чтобы сохранять статьи</span> : <span className={savedNewsHovered ? "main__cards-list-element-span main__cards-list-element-span_active" : "main__cards-list-element-span"}>Удалить из сохраненных</span>} 
            <img className="main__cards-list-element-bookmark" src={props.mainPage ? (!saved ? bookmarkPicture : bookmarkPictureSaved) : (deleteIcon)} onMouseOver={!saved && props.mainPage ? changeImageSrcOnHoverToActive : showDeleteMessageOnHover} onMouseOut={!saved && props.mainPage ? changeImageSrcOnHoverBack : removeDeleteMessageOnhoverBack} onClick={props.loggedIn && props.mainPage ? savePost : ""}></img>
            <img className="main__cards-list-element-image" src={props.image} alt="каритнка новости"></img>
            <div className="main__cards-list-element-wrapper">
                <p className="main__cards-list-element-date">{props.date}</p>
                <h3 className="main__cards-list-element-heading">{props.title}</h3>
                <p className="main__cards-list-element-text">{props.text}</p>
                <p className="main__cards-list-element-source">{props.source}</p>
            </div>
        </li>
    )
}
export default NewsCard;