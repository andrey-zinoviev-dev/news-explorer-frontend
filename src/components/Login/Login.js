import PopupWithForm from '../PopupWithForm/PopupWithForm';
import mainApi from '../../utils/MainApi';

function Login(props) {
    // function handleLoginSubmit(evt, formData) {
    //     evt.preventDefault();
    //     mainApi.loginUser(formData)
    //     .then((res) => {
    //         console.log(res);
    //     })
    // }

    return (
        <PopupWithForm onSubmitError={props.onSubmitError} popupClass={props.popupClass} isOpen={props.isOpen} popupSignUp={props.popupSignUp} close={props.close} onSubmit={props.onSubmit} swapPopupsWithForms={props.swapPopupsWithForms} heading="Войти" link="Зарегистрироваться" submitButtonText="Войти"></PopupWithForm>
    )
}

export default Login;