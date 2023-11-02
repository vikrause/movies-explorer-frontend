import "./Login.css"
import AuthHeader from "../AuthHeader/AuthHeader";
import AuthFooter from "../AuthFooter/AuthFooter";
import {useFormValidation} from "../../utils/hooks/useFormValidation";
import { Navigate } from "react-router-dom";
import {validateEmail} from "../../utils/formValidation";


export default function Login({onLogin, isLoggedIn, errorsFromApi, isLoading}) {
    const { values, handleChange, errors, isValid } = useFormValidation();

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(values);
    }

    return isLoggedIn ? (
        <Navigate to="/" replace />
    ) : (
        <main className="login">
            <section className="login__container">
                <AuthHeader title={"Рады видеть!"} />
                <form className="login__form" name="login" id="login" noValidate onSubmit={handleSubmit}>

                    <label className="login__label">
                        E-mail
                        <input className="login__input"
                               form="login"
                               type="email"
                               name="email"
                               id="email-input"
                               required
                               maxLength="30"
                               disabled={isLoading}
                               minLength="2"
                               placeholder="Ваша почта"
                               value={values.email || ''}
                               onChange={handleChange}
                        ></input>
                        <span className="login__input_error">{validateEmail(values.email).message}</span>
                    </label>
                    <label className="login__label">
                        Пароль
                        <input className="login__input"
                               form="login"
                               type="password"
                               name="password"
                               id="password-input"
                               disabled={isLoading}
                               required
                               placeholder="Ваш пароль"
                               value={values.password || ''}
                               onChange={handleChange}
                        ></input>
                        <span className="login__input_error">
                            {errors.password}
                        </span>
                        {errorsFromApi.login && (
                            <span className="login__input_error-api">
                            {'При попытке входа произошла ошибка. ' + errorsFromApi.login}
                        </span>
                        )}

                    </label>
                    <AuthFooter
                        buttonText={"Войти"}
                        text={"Ещё не зарегистрированы?"}
                        path={"/signup"}
                        linkText={"Регистрация"}
                        isButtonDisabled={
                            !isValid ||
                            validateEmail(values.email).invalid ||
                            errors.password
                        }
                    />
                </form>
            </section>
        </main>
    )
}