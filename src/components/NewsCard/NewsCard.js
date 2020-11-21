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
        <li className="cards__list-element">
            {props.mainPage ? "" : <span className="cards__list-element-span cards__list-element-span_keyword">{props.keyword}</span>}
            {props.mainPage ? <span className={hovered && !props.loggedIn && !saved ? "cards__list-element-span cards__list-element-span_active" : "cards__list-element-span"}>Войдите, чтобы сохранять статьи</span> : <span className={savedNewsHovered ? "cards__list-element-span cards__list-element-span_active" : "cards__list-element-span"}>Удалить из сохраненных</span>} 
            <img className="cards__list-element-bookmark" src={props.mainPage ? (!saved ? bookmarkPicture : bookmarkPictureSaved) : (deleteIcon)} onMouseOver={!saved && props.mainPage ? changeImageSrcOnHoverToActive : showDeleteMessageOnHover} onMouseOut={!saved && props.mainPage ? changeImageSrcOnHoverBack : removeDeleteMessageOnhoverBack} onClick={props.loggedIn && props.mainPage ? savePost : ""}></img>
            <img className="cards__list-element-image" src={props.image} alt="каритнка новости"></img>
            <div className="cards__list-element-wrapper">
                <p className="cards__list-element-date">{props.date}</p>
                <h3 className="cards__list-element-heading">{props.title}</h3>
                <p className="cards__list-element-text">{props.text}</p>
                <p className="cards__list-element-source">{props.source}</p>
            </div>
        </li>
    )
}
export default NewsCard;