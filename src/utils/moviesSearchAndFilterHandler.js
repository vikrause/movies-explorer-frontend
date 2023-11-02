import {SHORT_MOVIE_DURATION} from "./constants/constants";

export function handleSearchMovie(movies, searchQuery, saveResults= false) {
    const searchQueryFormatted = searchQuery.toLowerCase().trim();
    const result = movies.filter((movie) => {
        const nameRuFormatted = movie.nameRU.toLowerCase().trim();
        const nameEnFormatted = movie.nameEN.toLowerCase().trim();

        return (nameRuFormatted.includes(searchQueryFormatted) || nameEnFormatted.includes(searchQueryFormatted))
    });

    if (saveResults) {
        localStorage.setItem("foundMovies", JSON.stringify(result));
        localStorage.setItem("moviesSearchQuery", searchQueryFormatted);
    }

    return result;
}

export function handleFilterShortMovie(movies, isFilterOn, saveResults) {
    if (saveResults) {
        localStorage.setItem("isMoviesFilterOn", isFilterOn);
    }

    return (isFilterOn) ? movies.filter((movie) => movie.duration <= SHORT_MOVIE_DURATION) : movies;
}
