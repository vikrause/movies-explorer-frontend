import {Link, Route, Routes} from "react-router-dom";

import React from "react";
import './Header.css'
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import HeaderAccountLink from "../HeaderAccountLink/HeaderAccountLink";

export default function Header({ onBurgerButtonClick }) {
    return (
        <header className="header">
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="header__item">
                            <Link to="/" className="header__logo"></Link>
                            <ul className="header__links">
                                <li className="header__links_item">
                                    <Link to="/signup" className="header__link">Регистрация</Link>
                                </li>
                                <li className="header__links_item">
                                    <Link to="/signin" className="header__link header__link_type_login">Войти</Link>
                                </li>
                            </ul>
                        </div>
                    }
                />
                <Route
                    path="/movies"
                    element={
                        <div className="header__item">
                            <Link to="/" className="header__logo"></Link>
                            <HeaderNavigation/>
                            <HeaderAccountLink/>
                            <button className="header__burger" type="button" onClick={onBurgerButtonClick}></button>
                        </div>
                    }
                />
                <Route
                    path="/saved-movies"
                    element={
                        <div className="header__item">
                            <Link to="/" className="header__logo"></Link>
                            <HeaderNavigation/>
                            <HeaderAccountLink/>
                            <button className="header__burger" type="button" onClick={onBurgerButtonClick}></button>
                        </div>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <div className="header__item">
                            <Link to="/" className="header__logo"></Link>
                            <HeaderNavigation/>
                            <HeaderAccountLink/>
                            <button className="header__burger" type="button" onClick={onBurgerButtonClick}></button>
                        </div>
                    }
                />
            </Routes>
        </header>
    )
}