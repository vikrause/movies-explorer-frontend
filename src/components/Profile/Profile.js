import "./Profile.css"
import {useFormValidation} from "../../utils/hooks/useFormValidation";
import {CurrentUserContext} from "../../utils/contexts/CurrentUserContext";
import {useContext, useEffect, useState} from "react";
import {validateEmail, validateName} from "../../utils/formValidation"
import {useLocation} from "react-router-dom";

export default function Profile({ onSignOut, onUpdateUser, isCompleted, errorsFromApi, isLoading }) {

    const { values, handleChange, isValid, setValues, setIsValid } =
        useFormValidation();
    const currentUser = useContext(CurrentUserContext);
    const [successMsg, setSuccessMsg] = useState(false)

    const location = useLocation();

    useEffect(() => {
        if (currentUser) {
            setValues(currentUser);
            setIsValid(true);
        }
    }, [currentUser, setIsValid, setValues]);

    useEffect(() => {
        if (isCompleted) {
            setSuccessMsg(true);
        }
    }, [isCompleted, errorsFromApi]);

    useEffect(() => {
        setSuccessMsg(false);
        }, [location]
    );


    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser(values);
    }

    return (
        <main className="profile">
            <section className="profile__container">
                <h1 className="profile__title">{`Привет, ${currentUser.name|| ""}!`} &#128570; </h1>
                <form className="profile__form" name="edit-profile-form" id="edit-profile-form" noValidate onSubmit={handleSubmit}>
                    <label className="profile__label">
                        Имя
                        <input className="profile__input"
                               form="edit-profile-form"
                               type="text"
                               name="name"
                               id="name-input"
                               required
                               disabled={isLoading}
                               value={values.name || ""}
                               onChange={handleChange}
                               placeholder="Ваше имя"
                               maxLength="30"
                               minLength="2"
                        ></input>
                        <span className="profile__input_error">{validateName(values.name).message}</span>
                    </label>
                    <label className="profile__label">
                        E-mail
                        <input className="profile__input"
                               form="edit-profile-form"
                               type="email"
                               name="email"
                               id="email-input"
                               required
                               disabled={isLoading}
                               value={values.email || ""}
                               onChange={handleChange}
                               placeholder="Ваш email"
                               maxLength="30"
                               minLength="2"
                        ></input>
                        <span className="profile__input_error">{validateEmail(values.email).message}</span>
                    </label>
                <div className="profile__button-container">
                    {successMsg && (
                        <p className="profile__success-msg">Данные обновлены</p>
                    )}
                    {errorsFromApi.profile &&  (
                        <span className="profile__error-api">
                            {'При попытке обновления профиля произошла ошибка. ' + errorsFromApi.profile}
                        </span>
                    )}
                    <button
                        className="profile__button profile__button_type_submit hover-link"
                        type="submit"
                        disabled={
                            !isValid ||
                            (values.name === currentUser.name &&
                                values.email === currentUser.email) ||
                            validateEmail(values.email).invalid ||
                            validateName(values.name).invalid
                        }
                    >
                        Редактировать
                    </button>
                    <button className="profile__button profile__button_type_exit hover-link" type="submit" onClick={onSignOut}>
                        Выйти из аккаунта
                    </button>
                </div>
                </form>
            </section>
        </main>
    )
}