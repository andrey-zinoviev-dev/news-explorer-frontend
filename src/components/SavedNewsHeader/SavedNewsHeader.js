import React from 'react';
import './SavedNewsHeader.css';
import Header from '../Header/Header';
function SavedNewsHeader(props) {
    return (
        <>
        <Header loggedIn={props.loggedIn} mainPage={props.mainPage} user={props.user} shortenedHeaderWidth={props.shortenedHeaderWidth} onLogoutButtonClick={props.onLogoutButtonClick}></Header>
        </>
    )
}
export default SavedNewsHeader;