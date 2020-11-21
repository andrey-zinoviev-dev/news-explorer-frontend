import React from 'react';
import './PopupWithForm.css';
import popupCloseSing from '../../images/back.png';
import popupCloseSignSmall from '../../images/back-small.png';
function PopupWithFrom(props) {
    const [popupSignUp, setPopupSignUp] = React.useState(props.signUp);
    const [inputValue, setInputValue] = React.useState({email: "", password: ""});
    const [validEmail, setValidEmail] = React.useState({valid: false, message: ""});
    const [validPassword, setValidPassword] = React.useState({valid: false, message: ""});
    const [validName, setValidName] = React.useState({valid: false, message: ""});
    // let validForm = false;
    // let stateArray = [];
    let validForm = false;
    let smallWidth = false;
    function switchPopups() {
        setPopupSignUp(!popupSignUp);

    }
    function checkInputValidity(event) {
        validateForm();
        const {name, value, validationMessage} = event.target;
        
        const {valid} = event.target.validity;
        setInputValue({...inputValue, [name]:value});
       
        if(name === 'email') {
            if(valid && value != "") {
                setValidEmail({...validEmail, valid: true, message: ""});
            } else {
                setValidEmail({...validEmail, valid: false, message: validationMessage});
            }
        }
        if(name === "password") {
            if (valid && value != "") {
                setValidPassword({...validPassword, valid: true, message: ""});
            } else {
                setValidPassword({...validPassword, valid: false, message: validationMessage});
            }
        }
        if(name === "name") {
            if(valid && value != "") {
                setValidName({...validName, valid: true, message: ""});
            } else {
                setValidName({...validName, valid: false, message: validationMessage});
            }
        }
    }
    function validateForm() {
        if(validEmail.valid && validPassword.valid || validEmail.valid && validPassword.valid && validName.valid) {
            validForm = true;
        } else {
            validForm = false;
        }
        console.log(validEmail);
    }

    validateForm();
    
    function changeCloseLogoSize() {
        if(window.innerWidth < 768) {
            smallWidth = true;
        } else {
            smallWidth = false;
        }
    }
    changeCloseLogoSize();
    return (
        <section className={props.isOpen ? "popup popup_status_opened" : "popup"}>
            <div className="container">
                <div className="popup__wrapper">
                    <button className="popup__close" onClick={props.close}><img className="popup__close-logo" src={!smallWidth ? popupCloseSing : popupCloseSignSmall} alt="кнопка закрытия окна"></img></button>
                    <h3 className="popup__heading">{popupSignUp ? "Регистрация" : "Вход"}</h3>
                    <form className="popup__form" noValidate={true}>
                        <label className="popup__form-label">Email</label>
                        <input className="popup__form-input" placeholder="Введите почту" type="email" name="email" pattern="\w+@\w+\.\w+" onInput={checkInputValidity} autoComplete="off"></input>
                        <span className="popup__error-span">{validEmail.message}</span>
                        <label className="popup__form-label">Пароль</label>
                        <input className="popup__form-input" placeholder="Введите пароль" type="password" name="password" pattern="[A-z0-9]\w+" onInput={checkInputValidity} autoComplete="off"></input>
                        <span className="popup__error-span">{validPassword.message}</span>
                        {popupSignUp ?
                            <>
                                <label className="popup__form-label">Имя</label>
                                <input className="popup__form-input" placeholder="Введите имя" name="name" onInput={checkInputValidity} autoComplete="off" min={2} required={true}></input>
                                {/* <span className="popup__error-span">{validName.message}</span> */}
                            </>
                            :
                                ""
                        }
                        <button className={validForm ? "popup__form-submit popup__form-submit_valid-form" : "popup__form-submit"} type="submit">Войти</button>
                    </form>
                    <span className="popup__subtitle">или </span><a className="popup__link" onClick={switchPopups}>{popupSignUp ? "Войти" : "Зарегистрироваться"}</a>
                </div>
            </div>
            <div className="popup__overlay"></div>
        </section>
    )
}
export default PopupWithFrom;