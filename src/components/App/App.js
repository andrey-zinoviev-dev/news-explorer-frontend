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
  const [onSubmitError, setOnSubmitError] = React.useState("");
  const [newsApiServerError, setNewsApiServerError] = React.useState(false);
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
    setOnSubmitError("");
  }

  function submitLoginForm(evt, formData) {
    evt.preventDefault();
    mainApi.loginUser(formData)
    .then((res) => {
      if(res.payload) {
        localStorage.setItem('token', res.payload);
        evt.target.reset();
        return res;
      } else {
        const errorStatusCode = parseInt(res, 10);
        if(errorStatusCode === 400) {
          throw new Error("Проверьте почту или пароль");
        }
      }
    })
    .then(() => {
      const token = localStorage.getItem('token');
      const parsedArticles = JSON.parse(localStorage.getItem('articles'));
      const keyword = localStorage.getItem('keyword');
      mainApi.getUser(token)
      .then((res) => {
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
      setOnSubmitError(err.message);
    });
  }

  function submitRegistrationForm(evt, formData) {
    evt.preventDefault();
    mainApi.registerUser(formData)
    .then((res) => {
      if(res.ok) {
        setRegistered(true);
      } else {
        const errStatusCode = parseInt(res, 10);
        if(errStatusCode === 409) {
          throw new Error('Такой пользователь уже существует');
        }
      }
    })
    .catch((err) => {
      setOnSubmitError(err.message);
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
          if(res.status === 'error' || res.message) {
            throw new Error ('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
          } else {
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
          }
        })
        .catch((err) => {
          setOnSubmitError(err.message);
          setNewsApiServerError(true);
          setArticlesNotFound(false);
          setIsPreloaderActive(false);
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
            <Main newsApiServerError={newsApiServerError} onSubmitError={onSubmitError} keyword={articleKeyword} onSearchSubmit={searchFormSubmit} refreshSavedNewsArray={refreshSavedNewsArray} onDeleteArticle={deleteArticle} onSaveArticle={saveArticle} articlesNotFound={articlesNotFound} isPreloaderActive={isPreloaderActive} shortenedHeaderWidth={shortenedHeader} isSearchActive={isSearchActive} onSearchSubmit={searchFormSubmit} news={articles} favourites={savedArticles} onLoginButtonClick={expandPopupWithForm} onLogoutButtonClick={onLogoutButtonClick} mainPage={true} showPopup={expandPopupWithForm} />
          </Route>
        </Switch>
        <Footer></Footer>
        <Login onSubmitError={onSubmitError} isOpen={openedLoginPopup} popupClass="popup_type_login" close={closePopupWithForm} swapPopupsWithForms={swapPopupsWithForms} onSubmit={submitLoginForm}></Login>
        <Register onSubmitError={onSubmitError} isOpen={openedRegisterPopup} registered={registered} popupClass="popup_type_register" close={closePopupWithForm} swapPopupsWithForms={swapPopupsWithForms} onSubmit={submitRegistrationForm}></Register>
      </UserContext.Provider>
    </div>
  );
}

export default App;
