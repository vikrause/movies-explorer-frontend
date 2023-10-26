import "./Movies.css"
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function Movies({ isFilterOn, onFilterChange, movies, isLiked, onMovieLike }) {
    return (
        <main className="movies">
            <SearchForm isFilterOn={isFilterOn} onFilterChange={onFilterChange} />
            <MoviesCardList movies={movies} isLiked={isLiked} onMovieLike={onMovieLike}/>
        </main>
    )
}