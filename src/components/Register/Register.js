import "./Register.css"
import AuthHeader from "../AuthHeader/AuthHeader";
import AuthFooter from "../AuthFooter/AuthFooter";
import { Navigate } from "react-router-dom";
import {useFormValidation} from "../../utils/hooks/useFormValidation";
import {validateEmail, validateName} from "../../utils/formValidation";

export default function Register({ onRegister, isLoggedIn, errorsFromApi, isLoading }) {
    const { values, handleChange, errors, isValid } = useFormValidation();

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(values);
    }

    return isLoggedIn ? (
        <Navigate to="/" replace />
    ) : (
        <main className="register">
            <section className="register__container">
                <AuthHeader title={"Добро пожаловать!"} />
                <form className="register__form" name="register" id="register" noValidate onSubmit={handleSubmit}>

                    <label className="register__label">
                        Имя
                        <input className="register__input"
                               form="register"
                               type="text"
                               name="name"
                               id="name-input"
                               required
                               disabled={isLoading}
                               maxLength="30"
                               minLength="2"
                               placeholder="Ваше имя"
                               value={values.name || ''}
                               onChange={handleChange}
                        ></input>
                        <span className="register__input_error">{validateName(values.name).message}</span>
                    </label>

                    <label className="register__label">
                        E-mail
                        <input className="register__input"
                               form="register"
                               type="email"
                               name="email"
                               id="email-input"
                               required
                               disabled={isLoading}
                               maxLength="30"
                               minLength="2"
                               placeholder="Ваша почта"
                               value={values.email || ''}
                               onChange={handleChange}
                        ></input>
                        <span className="register__input_error">{validateEmail(values.email).message}</span>
                    </label>

                    <label className="register__label">
                        Пароль
                        <input className={`register__input ${errors.password && "register__input_error-pass"}`}
                               form="register"
                               type="password"
                               name="password"
                               id="password-input"
                               required
                               placeholder="Ваш пароль"
                               maxLength="30"
                               minLength="6"
                               disabled={isLoading}
                               value={values.password || ''}
                               onChange={handleChange}
                        ></input>
                        <span className="register__input_error">
                            {errors.password}
                        </span>
                        {errorsFromApi.register && (
                            <span className="register__input_error-api">
                            {'При попытке регистрации произошла ошибка. ' + errorsFromApi.register}
                        </span>
                        )}

                    </label>
                    <AuthFooter
                        buttonText={"Зарегистрироваться"}
                        text={"Уже зарегистрированы?"}
                        path={"/signin"}
                        linkText={"Войти"}
                        isButtonDisabled={
                            !isValid ||
                            validateEmail(values.email).invalid ||
                            validateName(values.name).invalid ||
                            errors.password
                        }
                    />
                </form>
            </section>
        </main>
    )
}