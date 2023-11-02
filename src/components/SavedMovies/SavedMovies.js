import "./SavedMovies.css"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import {useCallback, useEffect, useState} from "react";
import {handleSearchMovie, handleFilterShortMovie} from "../../utils/moviesSearchAndFilterHandler";
import {useLocation} from "react-router-dom";

export default function SavedMovies({ likedMovies, onMovieDelete }) {
    const [moviesToRender, setMoviesToRender] = useState([]);
    const [isFilterOn, setFilter] = useState(false);
    const [savedSearchQuery, setSavedSearchQuery] = useState('');
    const [isMoviesNotFound, setMoviesNotFound] = useState(false);
    const [isSearching, setSearching] = useState(false);
    const location = useLocation();

    const onSearchSubmit = useCallback(
        (searchQuery) => {
            setSavedSearchQuery(searchQuery);
        },
        []
    );

    const onFilterClick = useCallback(
        (isChecked) => {
            setFilter(isChecked);
        },
        []
    );

    useEffect(() => {
        setMoviesNotFound(false);
        setSearching(true);

        let movieListToFilter = likedMovies;
        let resultMovieList = likedMovies;

        if (savedSearchQuery) {
            const found = handleSearchMovie(likedMovies, savedSearchQuery);
            movieListToFilter = found;
            resultMovieList = found;

            if (!found.length) {
                setMoviesNotFound(true);
            }
        }

        if (isFilterOn) {
            const filtered = handleFilterShortMovie(movieListToFilter, isFilterOn);
            resultMovieList = filtered;
            if (!filtered.length) {
                setMoviesNotFound(true);
            }
        }

        setMoviesToRender(resultMovieList);
        setSearching(false);
    }, [isFilterOn, likedMovies, savedSearchQuery]);
    
    useEffect(() => {
        if (location.pathname === '/saved-movies') {
            setSavedSearchQuery('');
            setFilter(false);
        }
    }, [location]);

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
