import "./MoviesCard.css"
import {useLocation} from "react-router-dom";
import {MOVIE_BASE_URL} from "../../utils/constants/constants";

export default function MoviesCard({ movie, isLiked, onMovieLike, onMovieDelete }) {
    const location = useLocation();

    function convertMinutes(duration) {
        const minutes = duration % 60;
        const hours = (duration - minutes) / 60;
        if (hours < 1) {
            return `${minutes}м`;
        } else {
            return `${hours}ч ${minutes}м`;
        }
    }

    function handleLikeClick() {
        onMovieLike(movie)
    }

    function handleDeleteClick() {
        onMovieDelete(movie)
    }

    return (
        <li className="movies-card">
            <a className="movies-card__link hover-link" href={movie.trailerLink} target="_blank" rel="noreferrer">
                <img className="movies-card__img"
                     alt={movie.nameRU}
                     src={location.pathname === "/movies" ? `${MOVIE_BASE_URL}${movie.image.url}` : `${movie.image}`}
                />
            </a>
            {location.pathname === "/movies" ? (
                <button
                    className={`movies-card__action-button ${isLiked ? "movies-card__action-button_liked" : ""} hover-button`}
                    type="button"
                    aria-label="Сохранить"
                    onClick={isLiked ? handleDeleteClick : handleLikeClick}
                >Сохранить</button>
            ) : (
                <button
                    className="movies-card__action-button movies-card__action-button_place_saved-movies hover-button"
                    type="button"
                    aria-label="Удалить"
                    onClick={handleDeleteClick}
                >
                </button>
            )}

            <div className="movies-card__caption">
                <h2 className="movies-card__name">{movie.nameRU}</h2>
                <p className="movies-card__duration">{convertMinutes(movie.duration)}</p>
            </div>
        </li>
    )
}

