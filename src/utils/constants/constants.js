export const BASE_URL = 'https://movieExplorer.nomoredomainsrocks.ru';
export const MOVIE_BASE_URL = 'https://api.nomoreparties.co';
export const MOVIE_API_URL = `${MOVIE_BASE_URL}/beatfilm-movies`;
export const MOVIES_PAGE = '/movies';
export const SHORT_MOVIE_DURATION = 40;
export const MOVIES_RENDER_MAP = {
    desktop: {
        minWidth: 1280,
        params: {
            total: 12,
            more: 3
        }
    },
    tablet: {
        minWidth: 768,
        params: {
            total: 8,
            more: 2
        }
    },
    default: {
        params: {
            total: 5,
            more: 2
        }
    }
}
