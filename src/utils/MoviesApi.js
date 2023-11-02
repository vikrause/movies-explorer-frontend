import { MOVIE_API_URL } from "./constants/constants"

class MoviesApi {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _checkResponse(res) {
        return (res.ok) ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies() {
        return fetch(`${this._url}`, {headers: this._headers }).then((res) => {
            return this._checkResponse(res);
        });
    }
}

export const moviesApi = new MoviesApi({
    url: MOVIE_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})
