import "./SearchForm.css"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm({ isFilterOn, onFilterChange }) {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section className="search-form">
            <form className="search-form__form" name="search-form" noValidate onSubmit={handleSubmit}>
                <div className="search-form__form_container">
                    <input className="search-form__search" form="search-form" name="search" placeholder="Фильм" type="search"/>
                    <button className="search-form__button hover-button" type="submit" form="search-form" />
                </div>
                <FilterCheckbox
                    isFilterOn={isFilterOn}
                    onFilterChange={onFilterChange}
                />
            </form>
        </section>
    )
}