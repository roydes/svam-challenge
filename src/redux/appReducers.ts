import {
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS
} from './appActions'

const defaultState = {
  loading: false, 
  results: {}, 
  error: null,
}

export function appReducer(state = defaultState, action: any) {
  switch (action.type) {
    case FETCH_REQUEST:
      return {...state, loading: true };

      case FETCH_SUCCESS:
      return {...state, loading: false, results: action.response};

      case FETCH_FAILURE:
      return {...state, loading: false, error: action.error};

      default:
      return state
    }
}