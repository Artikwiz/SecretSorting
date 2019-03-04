import { combineReducers } from 'redux';
import navReducer from './navigation';
import session from './session';
import entities from './entities';

const appReducer = combineReducers({
  nav: navReducer,
  session,
  entities
});

export default function rootReducer(state, action) {
  // if (action.type === USER_LOGOUT) {
  //   state = undefined;
  // }

  return appReducer(state, action);
}
