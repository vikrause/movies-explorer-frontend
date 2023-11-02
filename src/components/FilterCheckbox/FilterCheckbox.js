import "./FilterCheckbox.css"

export default function FilterCheckbox({ isFilterOn, onFilterChange, isSearching }) {
    return (
        <div className="filter-checkbox">
            <label className="filter-checkbox__label">
                <input
                    className="filter-checkbox__input-toggle"
                    id="toggle"
                    form="search-form"
                    name="toggle"
                    type="checkbox"
                    checked={isFilterOn}
                    onChange={(evt) => onFilterChange(evt.target.checked)}
                    disabled={isSearching}
                />
                <span className="filter-checkbox__track"></span>
                Короткометражки
            </label>
        </div>

    )
}