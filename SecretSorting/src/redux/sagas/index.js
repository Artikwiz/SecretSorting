import { all } from 'redux-saga/effects';

import { sessionSagas } from './session';
import { userSagas } from './user';

export default function* rootSaga() {
  yield all([...sessionSagas, ...userSagas]);
}
