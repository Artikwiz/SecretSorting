import { combineReducers } from 'redux';
import navReducer from './navigation';

const appReducer = combineReducers({
  nav: navReducer
});

export default function rootReducer(state, action) {
  // if (action.type === USER_LOGOUT) {
  //   state = undefined;
  // }

  return appReducer(state, action);
}
