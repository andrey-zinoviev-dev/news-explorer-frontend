import React from 'react';
import './SavedNewsHeader.css';
import Header from '../Header/Header';
function SavedNewsHeader(props) {
    return (
        <>
        <Header loggedIn={props.loggedIn} mainPage={props.mainPage} shortenedHeaderWidth={props.shortenedHeaderWidth}></Header>
        </>
    )
}
export default SavedNewsHeader;