import {
  SESSION_LOGIN_SUCCEED,
  SESSION_LOGOUT,
  SESSION_LOGIN_ERROR,
  SESSION_LOAD_DATA_SUCCEED,
  SESSION_LOAD_DATA_ERROR
} from 'actions/session';

const defaultState = {
  token: '',
  uid: undefined,
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
        uid: undefined,
        error: null
      };
    case SESSION_LOGIN_SUCCEED:
      return {
        ...state,
        token: action.user.stsTokenManager.accessToken,
        uid: action.user.uid,
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
        uid: action.user.uid,
        token: action.user.token
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
