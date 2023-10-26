import "./FilterCheckbox.css"

export default function FilterCheckbox({ isFilterOn, onFilterChange }) {
    return (
        <div className="filter-checkbox">
            <label className="filter-checkbox__label">
                <input className="filter-checkbox__input-toggle" id="toggle" form="search-form" name="toggle" type="checkbox" value={isFilterOn} onChange={(evt) => onFilterChange(evt.target.checked)} />
                <span className="filter-checkbox__track"></span>
                Короткометражки
            </label>
        </div>

    )
}