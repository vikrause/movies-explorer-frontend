import "./NotFound.css"
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    function handleClickBack() {
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else {
            navigate("/", { replace: true });
        }
    }

    return(
        <main className="not-found">
            <section className="not-found__container">
                <p className="not-found__title">404</p>
                <h1 className="not-found__text">Страница не найдена</h1>
                <button className="not-found__button" type="button" onClick={handleClickBack}>Назад</button>
            </section>
        </main>
    )
}
