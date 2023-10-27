/*
 * Action types
 */
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

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