import { combineReducers } from 'redux';
import navReducer from './navigation';
import session from './session';

const appReducer = combineReducers({
  nav: navReducer,
  session
});

export default function rootReducer(state, action) {
  // if (action.type === USER_LOGOUT) {
  //   state = undefined;
  // }

  return appReducer(state, action);
}
