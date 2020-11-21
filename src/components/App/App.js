import React from 'react';
import { Route } from 'react-router-dom';
import '../../blocks/container.css';
import './App.css';

import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

import user from '../../utils/user';
import { news, moreNews } from '../../utils/news';
import savedNews from '../../utils/savedNews';

function App() {
  const [openedPopupWithForm, setOpenedPopupWithForm] = React.useState(false);
  const [articles, setArticles] = React.useState(news);
  const [shortenedHeader, setShortenedHeader] = React.useState(false);
  
  function expandPopupWithForm() {
    setOpenedPopupWithForm(true);
  }

  function closePopupWithForm() {
    setOpenedPopupWithForm(false);
  }

  function addNews() {
    setArticles([...articles, ...moreNews])
  }

  function setHeaderWidth() {
    if(window.innerWidth < 768) {
      hideHeaderNavigation();
    } else {
      showHeaderNavigation();
    }
  }

  function showWidthOnResize() {
    window.addEventListener('resize', () => {
      setHeaderWidth();
    });
  }


  function hideHeaderNavigation() {
    setShortenedHeader(true);
  }

  function showHeaderNavigation() {
    setShortenedHeader(false);
  }


  React.useEffect(() => {
    setHeaderWidth();
  }, []);
  
  React.useEffect(() => {
    showWidthOnResize();
  }, [window.innerWidth]);

  return (
    <div className="root">
      <Route exact path="/">
        <Main shortenedHeaderWidth={shortenedHeader} news={articles} loggedIn={false} onLoginButtonClick={expandPopupWithForm} mainPage={true} showPopup={expandPopupWithForm} handleMoreNewsButton={addNews} />
      </Route>
      <Route path="/saved-news">
        <SavedNews shortenedHeaderWidth={shortenedHeader} savedNewsPage={true} user={user} savedNews={savedNews}/>
      </Route>
      <Footer></Footer>
      <PopupWithForm isOpen={openedPopupWithForm} close={closePopupWithForm} signUp={false}></PopupWithForm>
    </div>
  );
}

export default App;
