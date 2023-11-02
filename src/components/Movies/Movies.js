import "./Movies.css"
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import useResize from "../../utils/hooks/useResize";
import {useCallback, useEffect, useState} from "react";
import {handleSearchMovie, handleFilterShortMovie} from "../../utils/moviesSearchAndFilterHandler";
import {MOVIES_PAGE} from "../../utils/constants/constants";

export default function Movies({ likedMovies, onMovieLike, onSearch, isSearchError, isLoading, onMovieDelete }) {
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
            const foundSearchMovies = handleSearchMovie(movies, searchQuery, MOVIES_PAGE);
            setFoundMovies(foundSearchMovies);

            if (foundSearchMovies.length) {
                const foundShortMovies = handleFilterShortMovie(foundSearchMovies, isFilterOn, MOVIES_PAGE);

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
            const foundShortMovies = handleFilterShortMovie(foundMovies, isChecked, MOVIES_PAGE)
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
                const filteredMovies = handleFilterShortMovie(foundMovies, isMoviesFilterOn, MOVIES_PAGE);
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
            case size >= 1280:
                setMoviesRenderParams({
                    'total': 12,
                    'more': 3
                });

                break;
            case size >= 768 && size < 1280:
                setMoviesRenderParams({
                    'total': 8,
                    'more': 2
                });

                break;
            default:
            case size < 768:
                setMoviesRenderParams({
                    'total': 5,
                    'more': 2
                });

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
            />
        </main>
    )
}