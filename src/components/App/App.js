import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import '../../blocks/container.css';
import './App.css';

import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';

import Login from '../Login/Login';
import Register from '../Register/Register';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import UserContext from '../../contexts/UserContext';

import mainApi from '../../utils/MainApi';
import newsApi from '../../utils/NewsApi';


function App() {
  const [openedLoginPopup, setOpenedLoginPopup] = React.useState(false);
  const [openedRegisterPopup, setOpenedRegisterPopup] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [articles, setArticles] = React.useState([]);
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [shortenedHeader, setShortenedHeader] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState();
  const [registered, setRegistered] = React.useState(false);
  const [isSearchActive, setIsSearchActive] = React.useState(false);
  const [isPreloaderActive, setIsPreloaderActive] = React.useState(false);
  const [articlesNotFound, setArticlesNotFound] = React.useState(false);
  const [articleKeyword, setArticleKeyword] = React.useState("");
  const history = useHistory();

  function expandPopupWithForm() {
    setOpenedLoginPopup(true);
  }

  function closePopupWithForm() {
    setOpenedLoginPopup(false);
    setOpenedRegisterPopup(false);
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

  function swapPopupsWithForms() {
    setOpenedLoginPopup(!openedLoginPopup);
    setOpenedRegisterPopup(!openedRegisterPopup);
  }

  function submitLoginForm(evt, formData) {
    evt.preventDefault();
    mainApi.loginUser(formData)
    .then((res) => {
      localStorage.setItem('token', res.payload);
      return res;
    })
    .then(() => {
      const token = localStorage.getItem('token');
      const parsedArticles = JSON.parse(localStorage.getItem('articles'));
      const keyword = localStorage.getItem('keyword');
      mainApi.getUser(token)
      .then((res) => {
        evt.target.reset();
        setCurrentUser(res);
        setLoggedIn(true);
        if(parsedArticles) {
          setArticles(parsedArticles);
          setIsSearchActive(true);
        }
        if(keyword) {
          setArticleKeyword(keyword);
        }
        mainApi.getSavedArticles(token)
        .then((res) => {
          setSavedArticles(res);
          closePopupWithForm();
        })
        .catch((err) => {
          console.log(err);
        })
      })
      .catch((err) => {
        console.log(err);
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function submitRegistrationForm(evt, formData) {
    evt.preventDefault();
    mainApi.registerUser(formData)
    .then(() => {
      setRegistered(true);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function onLogoutButtonClick () {
    localStorage.removeItem('token');
    // localStorage.removeItem('articles');
    setCurrentUser();
    // setArticles();
    // setIsSearchActive(false);
    history.push('/');
  }

  //ключевая фукнция с прелоудером, потом поменять на обращение к newsApi, setTimeout заменить на then(() => {})
  function searchFormSubmit (evt, topic) {
    evt.preventDefault();
    
    setIsSearchActive(true);
    setIsPreloaderActive(true);
    newsApi.getNews(topic)
        .then((res) => {
          if(res.articles.length === 0) {
            setIsPreloaderActive(false);
            setArticlesNotFound(true);
          } else {
            localStorage.setItem('articles', JSON.stringify(res.articles));
            localStorage.setItem('keyword', topic);
            setArticlesNotFound(false);
            setIsPreloaderActive(false);
            setArticleKeyword(topic);
            setArticles(res.articles);
            evt.target.reset();
          }
          
        })
        .catch((err) => {
          console.log(err);
        })
  }

  function saveArticle(card) {
    const token = localStorage.getItem('token');
    if(!token) {
      return;
    }
    mainApi.saveArticle(token, card)
    .then(() => {
      setSavedArticles([...savedArticles, card]);
      mainApi.getSavedArticles(token)
      .then((res) => {
        setSavedArticles(res);
      })
      .catch((err) => {
        console.log(err);
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function refreshSavedNewsArray(array) {
    setSavedArticles(array);
  }

  function deleteArticle(cardId) {
    const token = localStorage.getItem('token');
    return mainApi.deleteArticle(token, cardId)
  }

  React.useEffect(() => {
    setHeaderWidth();
  }, []);
  
  React.useEffect(() => {
    showWidthOnResize();
  }, [window.innerWidth]);

  React.useEffect(() => {
    if(JSON.parse(localStorage.getItem('articles'))) {
        const parsedArticles = JSON.parse(localStorage.getItem('articles'));
        setIsSearchActive(true);
        setArticles(parsedArticles);
    }
    if(localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const keyword = localStorage.getItem('keyword');
      Promise.all([mainApi.getUser(token), mainApi.getSavedArticles(token)])
      .then((res) => {
        const [user, articles] = res;
        if(res) {
          setArticleKeyword(keyword);
          setCurrentUser(user);
          setLoggedIn(true);
          setSavedArticles([...savedArticles, ...articles]);
        } else {
          setIsSearchActive(false);
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [])


  return (
    <div className="root">
      <UserContext.Provider value={currentUser}>
        <Switch>
          <ProtectedRoute exact path='/saved-news' loggedIn={loggedIn} isOpen={openedRegisterPopup} component={SavedNews} refreshSavedNewsArray={refreshSavedNewsArray} onDeleteArticle={deleteArticle} shortenedHeaderWidth={shortenedHeader} savedNewsPage={true} news={savedArticles} onLogoutButtonClick={onLogoutButtonClick} onRedirect={expandPopupWithForm}></ProtectedRoute>
          <Route exact path="/">
            <Main keyword={articleKeyword} onSearchSubmit={searchFormSubmit} refreshSavedNewsArray={refreshSavedNewsArray} onDeleteArticle={deleteArticle} onSaveArticle={saveArticle} articlesNotFound={articlesNotFound} isPreloaderActive={isPreloaderActive} shortenedHeaderWidth={shortenedHeader} isSearchActive={isSearchActive} onSearchSubmit={searchFormSubmit} news={articles} favourites={savedArticles} onLoginButtonClick={expandPopupWithForm} onLogoutButtonClick={onLogoutButtonClick} mainPage={true} showPopup={expandPopupWithForm} />
          </Route>
        </Switch>
        <Footer></Footer>
        <Login isOpen={openedLoginPopup} popupClass="popup_type_login" close={closePopupWithForm} swapPopupsWithForms={swapPopupsWithForms} onSubmit={submitLoginForm}></Login>
        <Register isOpen={openedRegisterPopup} registered={registered} popupClass="popup_type_register" close={closePopupWithForm} swapPopupsWithForms={swapPopupsWithForms} onSubmit={submitRegistrationForm}></Register>
      </UserContext.Provider>
    </div>
  );
}

export default App;
