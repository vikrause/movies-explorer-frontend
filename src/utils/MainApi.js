import { BASE_URL } from './constants/constants'

class MainApi {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkResponse(res) {
        return (res.ok) ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            credentials: 'include',
            headers: this._headers,
        }).then((res) => {
            return this._checkResponse(res);
        });
    }

    updateUserInfo(email, name) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                email: email,
                name: name
            })
        }).then((res) => {
            return this._checkResponse(res);
        });
    }

    getMoviesByOwner() {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            credentials: 'include',
            headers: this._headers
        }).then((res) => {
            return this._checkResponse(res);
        });
    }

    createMovies(movie) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: movie.image,
                trailerLink: movie.trailerLink,
                thumbnail: movie.thumbnail,
                movieId: movie.movieId,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            })
        }).then((res) => {
            return this._checkResponse(res);
        });
    }

    deleteMovie(id) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: this._headers,
        }).then((res) => {
            return this._checkResponse(res);
        });
    }

    register(name, email, password) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                name,
                email,
                password
            })
        }).then((res) => {
            return this._checkResponse(res);
        });
    }

    login(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then((res) => {
            return this._checkResponse(res);
        });
    }

    signOut() {
        return fetch(`${this._baseUrl}/signout`, {
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
        }).then((res) => {
            return this._checkResponse(res);
        });
    }
}

export const mainApi = new MainApi({
    baseUrl: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});
