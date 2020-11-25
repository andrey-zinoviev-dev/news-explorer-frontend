import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import '../../blocks/container.css';
import './App.css';

import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
// import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import TestComponent from '../TestComponent/TestComponent';
import UserContext from '../../contexts/UserContext';

import mainApi from '../../utils/MainApi';
// import user from '../../utils/user';
import { news, moreNews } from '../../utils/news';
import savedNews from '../../utils/savedNews';

function App() {
  const [openedLoginPopup, setOpenedLoginPopup] = React.useState(false);
  const [openedRegisterPopup, setOpenedRegisterPopup] = React.useState(false);
  // const [openedSuccessfullRegistrationPopup, setOpenedSuccessfullRegistrationPopup] = React.useState(false);
  const [articles, setArticles] = React.useState(news);
  const [shortenedHeader, setShortenedHeader] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState();
  const [loggedIn, setLoggedIn] = React.useState(false);

  function expandPopupWithForm() {
    setOpenedLoginPopup(true);
  }

  function setLoggedInStatusToTrue() {
    setLoggedIn(true);
  }
  // function expandSuccessfullRegistrationPopup() {
  //   setOpenedSuccessfullRegistrationPopup(true);
  // }

  function closePopupWithForm() {
    setOpenedLoginPopup(false);
    setOpenedRegisterPopup(false);
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
      mainApi.getUser(token)
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
        closePopupWithForm();
      })
      .catch((err) => {
        console.log(err);
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function onLogoutButtonClick () {
    localStorage.removeItem('token');
    setCurrentUser();
  }

  React.useEffect(() => {
    setHeaderWidth();
  }, []);
  
  React.useEffect(() => {
    showWidthOnResize();
  }, [window.innerWidth]);

  React.useEffect(() => {
    if(localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      mainApi.getUser(token)
      .then((res) => {
        if(res) {
          setLoggedIn(true);
          setCurrentUser(res);
        } else {
          localStorage.removeItem('token');
        }
        
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [loggedIn])

  return (
    <div className="root">
      <UserContext.Provider value={currentUser}>
        <Switch>
          <ProtectedRoute loggedIn={loggedIn} path="/saved-news" component={SavedNews} shortenedHeaderWidth={shortenedHeader} savedNewsPage={true} savedNews={savedNews} onLogoutButtonClick={onLogoutButtonClick}></ProtectedRoute>
          {/* <ProtectedRoute loggedIn={loggedIn} path="/saved-news" component={TestComponent} /> */}
          <Route exact path="/">
            <Main shortenedHeaderWidth={shortenedHeader} news={articles} onLoginButtonClick={expandPopupWithForm} onLogoutButtonClick={onLogoutButtonClick} mainPage={true} showPopup={expandPopupWithForm} handleMoreNewsButton={addNews} />
          </Route>
          {/* <Route path="/saved-news">
            <SavedNews loggedIn={loggedIn} path="/saved-news" component={SavedNews} shortenedHeaderWidth={shortenedHeader} savedNewsPage={true} savedNews={savedNews} onLogoutButtonClick={onLogoutButtonClick} />
          </Route> */}
        </Switch>
        <Footer></Footer>
        <Login isOpen={openedLoginPopup} popupClass="popup_type_login" close={closePopupWithForm} swapPopupsWithForms={swapPopupsWithForms} onSubmit={submitLoginForm}></Login>
        <Register isOpen={openedRegisterPopup} popupClass="popup_type_register" close={closePopupWithForm} swapPopupsWithForms={swapPopupsWithForms}></Register>
      </UserContext.Provider>
    </div>
  );
}

export default App;
