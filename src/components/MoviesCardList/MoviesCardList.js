import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard";
export default function MoviesCardList({ movies, isLiked, onMovieLike }) {
    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__list">
                {movies.map((movie) => (
                    <MoviesCard
                        key={movie.id}
                        onMovieLike={onMovieLike}
                        isLiked={isLiked}
                        movie={movie}
                    />
                ))}
            </ul>
            <button className="movies-card-list__button hover-button" type="button">Ещё</button>
        </section>
    )
}