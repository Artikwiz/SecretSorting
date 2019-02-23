import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import firebase from 'firebase';
import { AsyncStorage } from 'react-native';
import {
  SESSION_LOGIN,
  SESSION_LOGIN_SUCCEED,
  SESSION_LOGIN_ERROR,
  SESSION_REGISTER,
  SESSION_REGISTER_SUCCEED,
  SESSION_REGISTER_ERROR,
  SESSION_LOAD_DATA,
  SESSION_LOAD_DATA_SUCCEED,
  SESSION_LOAD_DATA_ERROR
} from 'actions/session';

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

const _storeSessionData = async data => {
  try {
    await AsyncStorage.setItem('@ss_session', data);
  } catch (error) {
    // Error saving data
  }
};

function* fetchSessionLogin(action) {
  try {
    const user = yield call(sessionLogin, action);
    const dataStore = {
      token: user.stsTokenManager.accessToken,
      uid: user.uid
    };
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    // AsyncStorage.setItem('ss_session', JSON.stringify(dataStore));
    _storeSessionData(JSON.stringify(dataStore));
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
    // const uid = user.uid;
    // yield put({ type: GET_SESSION, uid });
  } catch (e) {
    yield put({ type: SESSION_REGISTER_ERROR, message: 'Exception ' + e.message });
  }
}

/*    Session Load Data    */
const retrieveData = () =>
  AsyncStorage.getItem('ss_session').then(data => {
    if (data !== null) {
      const user = JSON.parse(data);
      if (user.token && user.uid) {
        return user;
      } else {
        throw new Error('No Data');
      }
    } else {
      throw new Error('No Data');
    }
  });

function* fetchSessionLoadData() {
  try {
    const user = yield call(retrieveData);
    yield put({ type: SESSION_LOAD_DATA_SUCCEED, user });
  } catch (e) {
    yield put({ type: SESSION_LOAD_DATA_ERROR });
  }
}

export const sessionSagas = [
  takeEvery(SESSION_LOGIN, fetchSessionLogin),
  takeEvery(SESSION_REGISTER, fetchSessionRegister),
  takeLatest(SESSION_LOAD_DATA, fetchSessionLoadData)
];

export default sessionSagas;
