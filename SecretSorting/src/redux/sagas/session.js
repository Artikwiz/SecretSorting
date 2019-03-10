import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  SESSION_LOGIN,
  SESSION_LOGIN_SUCCEED,
  SESSION_LOGIN_ERROR,
  SESSION_REGISTER,
  SESSION_REGISTER_SUCCEED,
  SESSION_REGISTER_ERROR,
  SESSION_LOAD_DATA,
  SESSION_LOAD_DATA_SUCCEED,
  SESSION_LOAD_DATA_ERROR,
  SESSION_LOGOUT,
  SESSION_LOGOUT_SUCCEED,
  SESSION_LOGOUT_ERROR
} from 'actions/session';
import {
  sessionLogIn,
  sessionRegister,
  onAuthStateChanged,
  onSessionLogOut
} from 'services/session';
import { createUser } from 'services/users';

/*    Session LogIn   */
function* fetchSessionLogin(action) {
  try {
    const user = yield call(sessionLogIn, action);
    // yield call(addFriendsToUser, user, ['titi', 'toto']);
    yield put({ type: SESSION_LOGIN_SUCCEED, user });
  } catch (e) {
    yield put({ type: SESSION_LOGIN_ERROR, message: 'Exception ' + e.message });
  }
}

/*    Session Register    */

function* fetchSessionRegister(action) {
  try {
    const output = yield call(sessionRegister, action);
    const user = output.user.toJSON();
    yield call(createUser, user);
    yield put({ type: SESSION_REGISTER_SUCCEED, user });
  } catch (e) {
    yield put({ type: SESSION_REGISTER_ERROR, message: 'Exception ' + e.message });
  }
}

/*    Session Load Data    */

function* fetchSessionLoadData() {
  try {
    const user = yield call(onAuthStateChanged);
    yield put({ type: SESSION_LOAD_DATA_SUCCEED, user });
  } catch (e) {
    yield put({ type: SESSION_LOAD_DATA_ERROR, message: 'Exception ' + e.message });
  }
}

/*    SessionLogOut   */

function* fetchSessionLogOut() {
  try {
    yield call(onSessionLogOut);
    yield put({ type: SESSION_LOGOUT_SUCCEED });
  } catch (e) {
    yield put({ type: SESSION_LOGOUT_ERROR, message: 'Exception ' + e.message });
  }
}

export const sessionSagas = [
  takeEvery(SESSION_LOGIN, fetchSessionLogin),
  takeEvery(SESSION_REGISTER, fetchSessionRegister),
  takeLatest(SESSION_LOAD_DATA, fetchSessionLoadData),
  takeEvery(SESSION_LOGOUT, fetchSessionLogOut)
];

export default sessionSagas;
