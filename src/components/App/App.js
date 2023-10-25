import {Route, Routes} from "react-router-dom";

import React, {useEffect, useState} from "react";
import './App.css';
import SideMenu from "../SideMenu/SideMenu";
import Main from "../Main/Main";
import AppLayout from "../AppLayout/AppLayout";
import Movies from "../Movies/Movies";
import film from "../../utils/data"
import user from "../../utils/userData.js"
import SavedMovies from "../SavedMovies/SavedMovies";
import Preloader from "../Preloader/Preloader";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";

function App() {
    const [isSideMenuOpen, setSideMenuStatus] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    const [isFilterOn, setFilter] = useState(false);
    const [isLiked, setLike] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(film);
    })


    window.onload = function () {
        setLoaded(true);
    }

    function handleOpenSideMenu() {
        setSideMenuStatus(!isSideMenuOpen);
    }

    function handleCloseSideMenu() {
        setSideMenuStatus(false);
    }

    function handleFilterChange(evt) {
        setFilter(evt);
    }

    function handleChangeLike() {
        setLike(!isLiked);
    }

    return (
        <div className='app'>
            {!isLoaded ? (
                <Preloader/>
            ) : (
                <>
                    <Routes>
                        <Route
                            path="/"
                            element={<AppLayout
                                onBurgerButtonClick={handleOpenSideMenu}
                            />}
                        >
                            <Route
                                index
                                element={<Main/>}
                            />
                            <Route
                                path="/movies"
                                element={<Movies
                                    onFilterChange={handleFilterChange}
                                    isFilterOn={isFilterOn}
                                    onMovieLike={handleChangeLike}
                                    movies={movies}
                                    isLiked={isLiked}
                                />}
                            />
                            <Route
                                path="/saved-movies"
                                element={<SavedMovies
                                    onFilterChange={handleFilterChange}
                                    isFilterOn={isFilterOn}
                                    movies={movies}
                                />}
                            />
                            <Route
                                path="/profile"
                                element={<Profile
                                    user={user}
                                />}
                            />
                        </Route>
                        <Route
                            path="/signin"
                        element={<Login />}
                        />
                        <Route
                            path="/signup"
                        element={<Register />}
                        />
                    </Routes>
                    <SideMenu isOpen={isSideMenuOpen} onClose={handleCloseSideMenu}/>
                </>
            )}
        </div>
    )
}

export default App;
