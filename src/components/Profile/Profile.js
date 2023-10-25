import "./Profile.css"

export default function Profile({ user }) {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <main className="profile">
            <section className="profile__container">
                <h2 className="profile__title">{`Привет, ${user.name}!`}</h2>
                <form className="profile__form" name="edit-profile-form" id="edit-profile-form" noValidate onSubmit={handleSubmit}>
                    <label className="profile__label">
                        Имя
                        <input className="profile__input"
                               form="edit-profile-form"
                               type="text"
                               name="name"
                               id="name-input"
                               required
                               value={user.name}
                        ></input>
                    </label>
                    <label className="profile__label">
                        E-mail
                        <input className="profile__input"
                               form="edit-profile-form"
                               type="email"
                               name="email"
                               id="email-input"
                               required
                               value={user.email}
                        ></input>
                    </label>
                </form>
                <div className="profile__button-container">
                    <button className="profile__button hover-link" type="submit">
                        Редактировать
                    </button>
                    <button className="profile__button profile__button_type_exit hover-link" type="submit">
                        Выйти из аккаунта
                    </button>
                </div>
            </section>
        </main>
    )
}