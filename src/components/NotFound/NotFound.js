import "./NotFound.css"
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return(
        <main className="not-found">
            <section className="not-found__container">
                <p className="not-found__title">404</p>
                <h1 className="not-found__text">Страница не найдена</h1>
                <button className="not-found__button hover-link" type="button" onClick={(() => navigate((-1)))}>Назад</button>
            </section>
        </main>
    )
}
