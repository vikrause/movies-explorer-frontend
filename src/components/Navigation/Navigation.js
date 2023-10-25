import {Link, useLocation} from "react-router-dom";

import React from "react";
import './Navigation.css'

export default function Navigation({ isSideMenuOpen, onClose }) {
    const location = useLocation();
    return (
        <nav className={`header-navigation ${isSideMenuOpen ? "" : "header-navigation_hidden"}`}>
            <ul className={`header-navigation__list ${isSideMenuOpen ? "header-navigation__list_place_side" : ""}`}>
                <li className={`header-navigation__item ${isSideMenuOpen ? "" : "header-navigation__item_hidden"}`}>
                    <Link to="/" className={`header-navigation__link ${isSideMenuOpen ? "header-navigation__link_place_side" : ""} ${location.pathname === "/" && isSideMenuOpen ? "header-navigation__link_place_side-active" : ""} hover-link`} onClick={onClose}>
                        Главная
                    </Link>
                </li>
                <li className="header-navigation__item">
                    <Link to="/movies" className={`header-navigation__link ${isSideMenuOpen ? "header-navigation__link_place_side" : ""} ${location.pathname === "/movies" && isSideMenuOpen ? "header-navigation__link_place_side-active" : ""} ${location.pathname === "/movies" && !isSideMenuOpen ? "header-navigation__link-active" : ""} hover-link`} onClick={onClose}>
                        Фильмы
                    </Link>
                </li>
                <li className="navigation__links_item">
                    <Link to="/saved-movies" className={`header-navigation__link ${isSideMenuOpen ? "header-navigation__link_place_side" : ""} ${location.pathname === "/saved-movies" && isSideMenuOpen ? "header-navigation__link_place_side-active" : ""} ${location.pathname === "/saved-movies" && !isSideMenuOpen ? "header-navigation__link-active" : ""} hover-link`} onClick={onClose}>
                        Сохранённые фильмы
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
