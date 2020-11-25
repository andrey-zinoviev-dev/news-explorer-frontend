import PopupWithForm from '../PopupWithForm/PopupWithForm';
import mainApi from '../../utils/MainApi';

function Register(props) {

    function handleRegisterSubmit(evt, formData) {
        evt.preventDefault();
        mainApi.registerUser(formData);
    }

    return (
        <PopupWithForm popupClass={props.popupClass} isOpen={props.isOpen} popupSignUp={true} close={props.close} onSubmit={handleRegisterSubmit} swapPopupsWithForms={props.swapPopupsWithForms} heading="Регистрация" link="Войти" submitButtonText="Зарегистрироваться"></PopupWithForm>
    )
}

export default Register;