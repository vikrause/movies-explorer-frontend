import "./MoviesCard.css"
import {useLocation} from "react-router-dom";

export default function MoviesCard({ movie, isLiked, onMovieLike }) {
    const location = useLocation();
    return (
        <li className="movies-card">
            <img className="movies-card__img" alt={movie.nameRU} src={movie.thumbnail}/>
            {location.pathname === "/movies" ? (
                <button
                    className={`movies-card__action-button ${isLiked ? "movies-card__action-button_liked" : ""} hover-button`}
                    type="button"
                    aria-label="Сохранить"
                    onClick={onMovieLike}
                >Сохранить</button>
            ) : (
                <button
                    className="movies-card__action-button movies-card__action-button_place_saved-movies hover-button"
                    type="button"
                    aria-label="Удалить"
                >
                </button>
            )}
            <div className="movies-card__caption">
                <h2 className="movies-card__name">{movie.nameRU}</h2>
                <p className="movies-card__duration">{movie.duration}</p>

            </div>
        </li>
    )
}

