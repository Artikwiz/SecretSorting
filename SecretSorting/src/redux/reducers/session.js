import {
  SESSION_LOGIN_SUCCEED,
  SESSION_LOGOUT,
  SESSION_LOGIN_ERROR,
  SESSION_LOAD_DATA_SUCCEED,
  SESSION_LOAD_DATA_ERROR
} from 'actions/session';

const defaultState = {
  user: null,
  language: '',
  error: null,
  isLoggedIn: false,
  isLoading: true
};

export default function sessionReducer(state = defaultState, action) {
  switch (action.type) {
    case SESSION_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: '',
        user: null,
        error: null
      };
    case SESSION_LOGIN_SUCCEED:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
        error: null
      };
    case SESSION_LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        error: action.error
      };
    case SESSION_LOAD_DATA_SUCCEED:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.user
      };
    case SESSION_LOAD_DATA_ERROR:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
