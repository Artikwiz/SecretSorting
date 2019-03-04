import { combineReducers } from 'redux';

import user from './user';
import sort from './sort';

export default combineReducers({
  user,
  sort
});
