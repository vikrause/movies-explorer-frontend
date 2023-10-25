import "./Login.css"
import AuthHeader from "../AuthHeader/AuthHeader";
import AuthFooter from "../AuthFooter/AuthFooter";

export default function Login() {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
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
                        ></input>
                    </label>

                    <label className="login__label">
                        Пароль
                        <input className="login__input"
                               form="login"
                               type="password"
                               name="password"
                               id="password-input"
                               required
                        ></input>
                    </label>
                </form>
                <AuthFooter buttonText={"Войти"} text={"Ещё не зарегистрированы?"} linkText={"Регистрация"}/>
            </section>
        </main>
    )
}