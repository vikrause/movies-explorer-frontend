import "./Movies.css"
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import useResize from "../../utils/hooks/useResize";
import {useCallback, useEffect, useState} from "react";
import {handleSearchMovie, handleFilterShortMovie} from "../../utils/moviesSearchAndFilterHandler";
import {MOVIES_RENDER_MAP} from "../../utils/constants/constants";

export default function Movies({ likedMovies, onMovieLike, onSearch, isSearchError, onMovieDelete, isLoading }) {
    const [moviesRenderParams, setMoviesRenderParams] = useState({});
    const [isFilterOn, setIsFilterOn] = useState(false);
    const [foundMovies, setFoundMovies] = useState([]);
    const [moviesToRender, setMoviesToRender] = useState([]);
    const [isMoviesNotFound, setMoviesNotFound] = useState(false);
    const [movies, setMovies] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    let size = useResize();

    const searchMovie = useCallback(
        (movies, searchQuery) => {
            const foundSearchMovies = handleSearchMovie(movies, searchQuery, true);
            setFoundMovies(foundSearchMovies);

            if (foundSearchMovies.length) {
                const foundShortMovies = handleFilterShortMovie(foundSearchMovies, isFilterOn, true);

                if (!foundShortMovies.length) {
                    setMoviesNotFound(true);
                }

                setMoviesToRender(foundShortMovies);
            } else {
                setMoviesToRender(foundSearchMovies);
                setMoviesNotFound(true);
            }

            setIsSearching(false);
        }, [isFilterOn]
    );

    const onSearchSubmit = useCallback(
        async (searchQuery) => {
            setIsSearching(true);
            setMoviesNotFound(false);

            if (movies.length) {
                searchMovie(movies, searchQuery);
            } else {
                const moviesData = await onSearch();

                if (moviesData) {
                    setMovies(moviesData);
                    searchMovie(moviesData, searchQuery);
                }
            }
        },
        [searchMovie, movies, onSearch]
    );

    const onFilterClick = useCallback(
        (isChecked) => {
            setIsFilterOn(isChecked);
            setMoviesNotFound(false);
            const foundShortMovies = handleFilterShortMovie(foundMovies, isChecked, true)
            setIsSearching(false);
            setMoviesToRender(foundShortMovies);
        }, [foundMovies]
    )

    useEffect(() => {
        if (localStorage.getItem("isMoviesFilterOn") && localStorage.getItem("foundMovies")) {
            const isMoviesFilterOn = JSON.parse(localStorage.getItem("isMoviesFilterOn"));
            const foundMovies = JSON.parse(localStorage.getItem("foundMovies"));

            setIsFilterOn(isMoviesFilterOn);
            setFoundMovies(foundMovies);

            if (foundMovies.length) {
                const filteredMovies = handleFilterShortMovie(foundMovies, isMoviesFilterOn, true);
                setMoviesToRender(filteredMovies);

                if (!filteredMovies.length) {
                    setMoviesNotFound(true);
                }
            } else {
                setMoviesToRender(foundMovies);
                setMoviesNotFound(true);
            }
        }
    }, []);

    useEffect(() => {
        switch (true) {
            case size >= MOVIES_RENDER_MAP.desktop.minWidth:
                setMoviesRenderParams(MOVIES_RENDER_MAP.desktop.params);

                break;
            case size >= MOVIES_RENDER_MAP.tablet.minWidth:
                setMoviesRenderParams(MOVIES_RENDER_MAP.tablet.params);

                break;
            default:
                setMoviesRenderParams(MOVIES_RENDER_MAP.default.params);

                break;
        }
    }, [size, setMoviesRenderParams]);

    return (
        <main className="movies">
            <SearchForm
                isFilterOn={isFilterOn}
                onFilterChange={onFilterClick}
                onSearch={onSearchSubmit}
                isSearching={isSearching}
            />
            <MoviesCardList
                movies={moviesToRender}
                isMoviesNotFound={isMoviesNotFound}
                isSearchError={isSearchError}
                moviesRenderParams={moviesRenderParams}
                likedMovies={likedMovies}
                onMovieDelete={onMovieDelete}
                onMovieLike={onMovieLike}
                isLoading={isLoading}
            />
        </main>
    )
}