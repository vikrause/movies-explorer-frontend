import "./SavedMovies.css"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import {useCallback, useEffect, useState} from "react";
import {handleSearchMovie, handleFilterShortMovie} from "../../utils/moviesSearchAndFilterHandler";
import {SAVED_MOVIES_PAGE} from "../../utils/constants/constants";

export default function SavedMovies({ likedMovies, onMovieDelete }) {
    const [moviesToRender, setMoviesToRender] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [isFilterOn, setFilter] = useState(false);
    const [isMoviesNotFound, setMoviesNotFound] = useState(false);
    const [isSearching, setSearching] = useState(false);

    const onSearchSubmit = useCallback(
        (searchQuery) => {
            setMoviesNotFound(false);
            setSearching(true);

            if (likedMovies.length) {
                const found = handleSearchMovie(likedMovies, searchQuery, SAVED_MOVIES_PAGE);
                setFilteredCards(found);

                if (found.length) {
                    const filtered = handleFilterShortMovie(found, isFilterOn, SAVED_MOVIES_PAGE);
                    setMoviesToRender(filtered);

                    if (!filtered.length) {
                        setMoviesNotFound(true);
                    }
                } else {
                    setMoviesNotFound(true);
                    setMoviesToRender(found);
                }
            } else {
                setMoviesNotFound(true);
            }

            setSearching(false);
        },
        [likedMovies, isFilterOn]
    );

    const onFilterClick = useCallback(
        (isChecked) => {
            setFilter(isChecked);
            setMoviesNotFound(false);

            const filtered = handleFilterShortMovie(filteredCards, isChecked, SAVED_MOVIES_PAGE);
            setMoviesToRender(filtered);

            if (!filtered.length) {
                setMoviesNotFound(true);
            }
        },
        [filteredCards]
    );

    useEffect(() => {
        setMoviesNotFound(false);
        const filter = JSON.parse(localStorage.getItem("isSavedMoviesFilterOn"));
        const searchQuery = localStorage.getItem("savedMoviesSearchQuery");

        switch (true) {
            case (searchQuery && filter):
                setFilter(filter);

                const found = handleSearchMovie(likedMovies, searchQuery, SAVED_MOVIES_PAGE);
                setFilteredCards(found);

                if (found.length) {
                    const filtered = handleFilterShortMovie(found, filter, SAVED_MOVIES_PAGE);
                    setMoviesToRender(filtered);

                    if (!filtered.length) {
                        setMoviesNotFound(true);
                    }
                } else {
                    setMoviesNotFound(true);
                    setMoviesToRender(found);
                }

                break;
            case (!searchQuery && filter):
                setFilteredCards(likedMovies);
                setFilter(filter);

                const filtered = handleFilterShortMovie(likedMovies, filter, SAVED_MOVIES_PAGE);
                setMoviesToRender(filtered);

                if (!filtered.length) {
                    setMoviesNotFound(true);
                }

                break;
            default:
                setMoviesToRender(likedMovies);
                setFilteredCards(likedMovies);

                break;
        }
    }, [likedMovies]);

    return (
        <main className="saved-movies">
            <SearchForm
                onSearch={onSearchSubmit}
                onFilterChange={onFilterClick}
                isFilterOn={isFilterOn}
                isSearching={isSearching}
            />
            <MoviesCardList
                movies={moviesToRender}
                likedMovies={likedMovies}
                isMoviesNotFound={isMoviesNotFound}
                onMovieDelete={onMovieDelete}
            />
        </main>
    )
}
