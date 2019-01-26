import { call, put, takeEvery } from 'redux-saga/effects';
import firebase from 'firebase';

import { SESSION_LOGIN, SESSION_LOGIN_SUCCEED, SESSION_LOGIN_ERROR } from 'actions/session';

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
    .then(response => {
      if (response.user) {
        console.log(response.user);
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        // localStorage.setItem('ue_session', JSON.stringify(response.data));
      }
      return response.user;
    });

function* fetchSessionLogin(action) {
  try {
    console.log('fetch');
    const user = yield call(sessionLogin, action);
    yield put({ type: SESSION_LOGIN_SUCCEED, user });
    // const uid = user.uid;
    // yield put({ type: GET_SESSION, uid });
  } catch (e) {
    yield put({ type: SESSION_LOGIN_ERROR, message: 'Exception ' + e.message });
  }
}

export const sessionSagas = [takeEvery(SESSION_LOGIN, fetchSessionLogin)];

export default sessionSagas;
