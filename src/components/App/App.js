import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import React, {useCallback, useEffect, useState} from "react";

import './App.css';

import {moviesApi} from "../../utils/MoviesApi";
import {mainApi} from "../../utils/MainApi";
import {MOVIE_BASE_URL} from "../../utils/constants/constants";
import {CurrentUserContext} from "../../utils/contexts/CurrentUserContext";

import SideMenu from "../SideMenu/SideMenu";
import Main from "../Main/Main";
import AppLayout from "../AppLayout/AppLayout";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Preloader from "../Preloader/Preloader";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
    const [currentUser, setCurrentUser] = React.useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [isSideMenuOpen, setSideMenuStatus] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isPreloaderActive, setIsPreloaderActive] = useState(true);
    const [likedMovies, setLikedMovies] = useState([]);
    const [isSearchError, setIsSearchError] = useState(false)
    const [errorsFromApi, setErrorsFromApi] = useState({
        login: "",
        register: "",
        profile: ""
    });

    const navigate = useNavigate();
    const location = useLocation();

    async function register({ name, email, password }) {
        setIsLoading(true);
        try {
            const userData = await mainApi.register( name, email, password)
            if (userData) {
                login({ email, password })
                navigate("/movies")
            }
        } catch (err) {
            console.log(err);
            setIsCompleted(false);
            setErrorsFromApi({ ...errorsFromApi, register: err });
        } finally {
            setIsLoading(false);
        }
    }

    async function login({ email, password }) {
        setIsLoading(true);
        try {
            const userData = await mainApi.login(email, password)
            if (userData) {
                setIsLoggedIn(true);
                navigate("/movies")
            }
        } catch (err) {
            setIsCompleted(false);
            console.log(err);
            setErrorsFromApi({ ...errorsFromApi, login: err });

        } finally {
            setIsLoading(false);
        }
    }

    const getUserInfo = useCallback(async () => {
        try {
            const userData = await mainApi.getUserInfo();
            if (userData) {
                setIsLoggedIn(true);
                setCurrentUser(userData);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsPreloaderActive(false);
        }
    }, []);

    async function updateUserInfo({ email, name }) {
        setIsLoading(true);
        try {
            const userData = await mainApi.updateUserInfo(email, name );
            if (userData) {
                setCurrentUser(userData);
                setIsCompleted(true);
                setErrorsFromApi({ ...errorsFromApi, profile: "" });
            }
        } catch (err) {
            console.error(err);
            setIsCompleted(false);
            setErrorsFromApi({ ...errorsFromApi, profile: err });
        } finally {
            setIsLoading(false);
        }
    }

    async function signOut() {
        setIsLoading(true);
        try {
            const userData = await mainApi.signOut()
            if (userData) {
                setCurrentUser({});
                setIsLoading(false);
                setIsLoggedIn(false)
                setLikedMovies([]);
                localStorage.clear();
                navigate("/");
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        setIsCompleted(false);
        setErrorsFromApi({
            login: "",
            register: "",
            profile: ""
        });
    }, [location]);

    async function getMovies() {
        setIsLoading(true);
        setIsSearchError(false);
        try {
            const moviesData = await moviesApi.getMovies();
            if (moviesData) {
                return moviesData;
            }
        } catch (err) {
            console.error(err);
            setIsSearchError(true);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleMovieLike(movie) {
        try {
            const movieData = await mainApi.createMovies({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `${MOVIE_BASE_URL}${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: `${MOVIE_BASE_URL}${movie.image.formats.thumbnail.url}`,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            });

            if (movieData) {
                setLikedMovies([movieData, ...likedMovies]);
            }
        } catch (err) {
            console.error(err);
        }
    }

    async function deleteMovie(movie) {
        const movieToDelete = likedMovies.find(
            (likedMovie) => likedMovie.movieId === movie.id || likedMovie.movieId === movie.movieId
        );
        try {
            const data = await mainApi.deleteMovie(movieToDelete._id);
            if (data) {
                setLikedMovies((likedMovies) =>
                    likedMovies.filter((movie1) => movie1._id !== movieToDelete._id)
                )
            }
        } catch (err) {
            console.error(err);
        }
    }

    const getLikedMovies = useCallback(async () => {
        try {
            const moviesData = await mainApi.getMoviesByOwner();
            if (moviesData) {
                setLikedMovies(moviesData);
            }
        } catch (err) {
            console.error(err);
        }
    }, []);

    useEffect(() => {
        getUserInfo();
    }, [isLoggedIn, getUserInfo]);

    useEffect(() => {
        if (isLoggedIn) {
            getLikedMovies();
        }
    }, [isLoggedIn, getLikedMovies]);

    function handleOpenSideMenu() {
        setSideMenuStatus(!isSideMenuOpen);
    }

    function handleCloseSideMenu() {
        setSideMenuStatus(false);
    }

    return (
        <div className='app__content'>
            {isPreloaderActive ? (
                <Preloader/>
            ) : (
                <CurrentUserContext.Provider value={currentUser}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <AppLayout
                                    onBurgerButtonClick={handleOpenSideMenu}
                                    isLoggedIn={isLoggedIn}
                                />
                            }
                        >
                            <Route
                                index
                                element={<Main/>}
                            />
                            <Route
                                path="/movies"
                                element={
                                    <ProtectedRoute
                                        element={Movies}
                                        onSearch={getMovies}
                                        likedMovies={likedMovies}
                                        onMovieDelete={deleteMovie}
                                        onMovieLike={handleMovieLike}
                                        isSearchError={isSearchError}
                                        isLoading={isLoading}
                                        isLoggedIn={isLoggedIn}
                                    />
                                }
                            />
                            <Route
                                path="/saved-movies"
                                element={
                                    <ProtectedRoute
                                        element={SavedMovies}
                                        onMovieDelete={deleteMovie}
                                        likedMovies={likedMovies}
                                        isLoggedIn={isLoggedIn}
                                    />
                                }
                            />
                            <Route
                                path="/profile"
                                element={
                                    <ProtectedRoute
                                        element={Profile}
                                        isLoggedIn={isLoggedIn}
                                        onUpdateUser={updateUserInfo}
                                        isLoading={isLoading}
                                        onSignOut={signOut}
                                        isCompleted={isCompleted}
                                        errorsFromApi={errorsFromApi}
                                    />
                                }
                            />
                        </Route>
                        <Route
                            path="/signin"
                            element={
                                <Login
                                    onLogin={login}
                                    isLoggedIn={isLoggedIn}
                                    errorsFromApi={errorsFromApi}
                                    isLoading={isLoading}
                                />
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                <Register
                                    onRegister={register}
                                    isLoggedIn={isLoggedIn}
                                    errorsFromApi={errorsFromApi}
                                    isLoading={isLoading}
                                />
                            }
                        />
                        <Route
                            path="*"
                            element={<NotFound/>}
                        />
                    </Routes>
                    <SideMenu isOpen={isSideMenuOpen} onClose={handleCloseSideMenu}/>
                </CurrentUserContext.Provider>
            )}
        </div>
    )
}

export default App;
