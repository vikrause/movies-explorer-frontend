import "./Register.css"
import AuthHeader from "../AuthHeader/AuthHeader";
import AuthFooter from "../AuthFooter/AuthFooter";

export default function Register() {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
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
                               maxLength="30"
                               minLength="2"
                               placeholder="Ваше имя"
                        ></input>
                    </label>

                    <label className="register__label">
                        E-mail
                        <input className="register__input"
                               form="register"
                               type="email"
                               name="email"
                               id="email-input"
                               required
                               maxLength="30"
                               minLength="2"
                               placeholder="Ваша почта"
                        ></input>
                    </label>

                    <label className="register__label">
                        Пароль
                        <input className="register__input register__input_error"
                               form="register"
                               type="password"
                               name="password"
                               id="password-input"
                               required
                               placeholder="Ваш пароль"
                        ></input>
                        <span className="register__text-error">Что-то пошло не так...</span>
                    </label>
                </form>
                <AuthFooter buttonText={"Зарегистрироваться"} text={"Уже зарегистрированы?"} path={"/signin"} linkText={"Войти"}/>
            </section>
        </main>
    )
}