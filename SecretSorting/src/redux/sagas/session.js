import { call, put, takeEvery } from 'redux-saga/effects';
import firebase from 'firebase';
import {
  SESSION_LOGIN,
  SESSION_LOGIN_SUCCEED,
  SESSION_LOGIN_ERROR,
  SESSION_REGISTER,
  SESSION_REGISTER_SUCCEED,
  SESSION_REGISTER_ERROR
} from 'actions/session';
import { NavigationActions } from 'react-navigation';

/*    Session LogIn   */
const sessionLogin = user =>
  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
    })
    .then(response => response.user.toJSON());

function* fetchSessionLogin(action) {
  try {
    const user = yield call(sessionLogin, action);
    yield put({ type: SESSION_LOGIN_SUCCEED, user });
    // const uid = user.uid;
    // yield put({ type: GET_SESSION, uid });
  } catch (e) {
    yield put({ type: SESSION_LOGIN_ERROR, message: 'Exception ' + e.message });
  }
}

/*    Session Register    */

const sessionRegister = user =>
  firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/email-already-in-use') {
        alert('Email already used');
      } else {
        alert(errorMessage);
      }
    });

function* fetchSessionRegister(action) {
  try {
    const user = yield call(sessionRegister, action);
    yield put({ type: SESSION_REGISTER_SUCCEED, user });
    NavigationActions.navigate({ routeName: 'Login' });
    // const uid = user.uid;
    // yield put({ type: GET_SESSION, uid });
  } catch (e) {
    yield put({ type: SESSION_REGISTER_ERROR, message: 'Exception ' + e.message });
  }
}

export const sessionSagas = [
  takeEvery(SESSION_LOGIN, fetchSessionLogin),
  takeEvery(SESSION_REGISTER, fetchSessionRegister)
];

export default sessionSagas;
