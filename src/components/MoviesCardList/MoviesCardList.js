import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import Preloader from "../Preloader/Preloader";

export default function MoviesCardList({
    movies,
    moviesRenderParams,
    likedMovies,
    onMovieLike,
    onMovieDelete,
    isMoviesNotFound,
    isSearchError,
    isLoading
}) {
    const [moviesToRender, setMoviesToRender] = useState([]);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/movies" && movies.length) {
            const result = movies.filter((card, index) => {
                return index < moviesRenderParams.total;
            });
            setMoviesToRender(result);
        }
    }, [location.pathname, movies, moviesRenderParams]);

    useEffect(() => {
        if (location.pathname === "/saved-movies") {
            setMoviesToRender(movies);
        }
    }, [location.pathname, movies]);

    function onClickMoreMovies() {
        let diff = movies.filter(movie => !moviesToRender.includes(movie));
        setMoviesToRender(moviesToRender.concat(diff.slice(0, moviesRenderParams.more)));
    }

    function handleLikedStatus(likedMovies, movie) {
        return likedMovies.find((likedMovie) => {
            return likedMovie.movieId === (movie.id || movie.movieId);
        });
    }

    return (
        <section className="movies-card-list">
            {!localStorage.getItem("searchQuery") && movies.length === 0 && null}
            {isLoading && movies.length === 0 && <Preloader />}
            {isMoviesNotFound && (
                <p className="movies-card-list__error">Ничего не найдено &#128575;</p>
            )}
            {isSearchError && (
                <p className="movies-card-list__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз &#128575;</p>
            )}
            {movies.length !== 0 && !isMoviesNotFound && (
                <>
                <ul className="movies-card-list__list">
                    {moviesToRender.map((movie) => (
                        <MoviesCard
                            key={movie.id || movie._id}
                            onMovieLike={onMovieLike}
                            onMovieDelete={onMovieDelete}
                            isLiked={handleLikedStatus(likedMovies, movie)}
                            movie={movie}
                        />
                    ))}
                </ul>
            {location.pathname === "/movies" && movies.length > moviesToRender.length ? (
                <button
                    className="movies-card-list__button hover-button"
                    type="button"
                    onClick={onClickMoreMovies}>Ещё</button>
                ) : ""}
                </>
            )}
        </section>
    )
}