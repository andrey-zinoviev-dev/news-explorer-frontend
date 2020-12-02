import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Register(props) {

    
    return (
        <PopupWithForm registered={props.registered} popupClass={props.popupClass} isOpen={props.isOpen} popupSignUp={true} close={props.close} onSubmit={props.onSubmit} swapPopupsWithForms={props.swapPopupsWithForms} heading="Регистрация" link="Войти" submitButtonText="Зарегистрироваться"></PopupWithForm>
    )
}

export default Register;