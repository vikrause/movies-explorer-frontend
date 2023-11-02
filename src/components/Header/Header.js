import {Link, Route, Routes} from "react-router-dom";

import React, {Fragment} from "react";
import './Header.css'
import Navigation from "../Navigation/Navigation";
import HeaderAccountLink from "../HeaderAccountLink/HeaderAccountLink";

export default function Header({ onBurgerButtonClick, isLoggedIn }) {
    return (
        <header className="header">
            <Routes>
                {isLoggedIn ? (
                    <Fragment>
                        <Route
                            path="/"
                            element={
                                <div className="header__item">
                                    <Link to="/" className="header__logo"></Link>
                                    <Navigation/>
                                    <HeaderAccountLink/>
                                    <button className="header__burger hover-button" type="button" onClick={onBurgerButtonClick}></button>
                                </div>
                            }
                        />
                        <Route
                            path="/movies"
                            element={
                                <div className="header__item">
                                    <Link to="/" className="header__logo"></Link>
                                    <Navigation/>
                                    <HeaderAccountLink/>
                                    <button className="header__burger hover-button" type="button" onClick={onBurgerButtonClick}></button>
                                </div>
                            }
                        />
                        <Route
                            path="/saved-movies"
                            element={
                                <div className="header__item">
                                    <Link to="/" className="header__logo"></Link>
                                    <Navigation/>
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
                                    <Navigation/>
                                    <HeaderAccountLink/>
                                    <button className="header__burger" type="button" onClick={onBurgerButtonClick}></button>
                                </div>
                            }
                        />
                    </Fragment>
                ) : (
                    <Route
                        path="/"
                        element={
                            <div className="header__item">
                                <Link to="/" className="header__logo hover-button"></Link>
                                <nav className="header__menu">
                                    <ul className="header__list">
                                        <li className="header__links">
                                            <Link to="/signup" className="header__link hover-link">
                                                Регистрация
                                            </Link>
                                        </li>
                                        <li className="header__links">
                                            <Link to="/signin" className="header__link header__link_type_login hover-button">
                                                Войти
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        }
                    />
                )}
            </Routes>
        </header>
    )
}