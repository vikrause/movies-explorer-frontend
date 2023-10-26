import "./SavedMovies.css"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

export default function SavedMovies({ movies, isFilterOn, onFilterChange }) {
    return (
        <main className="saved-movies">
            <SearchForm isFilterOn={isFilterOn} onFilterChange={onFilterChange} />
            <MoviesCardList movies={movies}/>
        </main>
    )
}