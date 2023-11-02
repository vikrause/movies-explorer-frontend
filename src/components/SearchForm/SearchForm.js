import "./SearchForm.css"

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {MOVIES_PAGE} from "../../utils/constants/constants";

export default function SearchForm({ isFilterOn, onFilterChange, isSearching, onSearch }) {
    const location = useLocation()
    const [searchQuery, setSearchQuery] = useState("");
    const [queryError, setQueryError] = useState("")

    useEffect(() => {
        if (location.pathname === MOVIES_PAGE && localStorage.getItem("moviesSearchQuery")) {
            setSearchQuery(localStorage.getItem("moviesSearchQuery"));
        }
    }, [location.pathname]);

    function handleSubmit(e) {
        e.preventDefault();

        if (location.pathname === MOVIES_PAGE) {
            searchQuery
                ? onSearch(searchQuery)
                : setQueryError("Нужно ввести ключевое слово");
        } else {
            onSearch(searchQuery);
        }
    }

    useEffect(() => {
        setQueryError("");
    }, [searchQuery]);

    return (
        <section className="search-form">
            <form
                className="search-form__form"
                name="search-form"
                id="search-form"
                noValidate
                onSubmit={handleSubmit}
            >
                <div className="search-form__container">
                    <input
                        className="search-form__search"
                        form="search-form"
                        name="search"
                        placeholder="Фильм"
                        type="search"
                        required
                        disabled={isSearching}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery || ""}
                    />
                    <button
                        className="search-form__button hover-button"
                        type="submit"
                        form="search-form"
                    />
                </div>
                <span className="search-form__text-error">{queryError}</span>
                <FilterCheckbox
                    isFilterOn={isFilterOn}
                    onFilterChange={onFilterChange}
                />
            </form>
        </section>
    )
}