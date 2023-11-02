import {MOVIES_PAGE, SAVED_MOVIES_PAGE} from "./constants/constants";

export function handleSearchMovie(movies, searchQuery, page) {
    const searchQueryFormatted = searchQuery.toLowerCase().trim();
    const result = movies.filter((movie) => {
        const nameRuFormatted = movie.nameRU.toLowerCase().trim();
        const nameEnFormatted = movie.nameEN.toLowerCase().trim();

        return (nameRuFormatted.includes(searchQueryFormatted) || nameEnFormatted.includes(searchQueryFormatted))
    });

    switch (page) {
        case MOVIES_PAGE:
            localStorage.setItem("foundMovies", JSON.stringify(result));
            localStorage.setItem("moviesSearchQuery", searchQueryFormatted);
            break;
        case SAVED_MOVIES_PAGE:
            localStorage.setItem("savedMoviesSearchQuery", searchQueryFormatted);
            break;
        default:
            break;
    }

    return result;
}

export function handleFilterShortMovie(movies, isFilterOn, page) {
    switch (page) {
        case MOVIES_PAGE:
            localStorage.setItem("isMoviesFilterOn", isFilterOn);
            break;
        case SAVED_MOVIES_PAGE:
            localStorage.setItem("isSavedMoviesFilterOn", isFilterOn);
            break;
        default:
            break;
    }

    return (isFilterOn) ? movies.filter((movie) => movie.duration <= 40) : movies;
}
