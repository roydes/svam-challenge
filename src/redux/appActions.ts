/*
 * Action types
 */
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const FETCH_FILMS_REQUEST = 'FETCH_FILMS_REQUEST';
export const FETCH_FILMS_FAILURE = 'FETCH_FILMS_FAILURE';
export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';

/*
 * Actions
 */
export function fetchRequest() {
  return { type: FETCH_REQUEST }
}

export function fetchFailure(error: any) {
    return { type: FETCH_FAILURE, error }
}

export function fetchSuccess(response: any) {
    return { type: FETCH_SUCCESS, response }
}