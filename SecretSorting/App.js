import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import EStyleSheet from 'react-native-extended-stylesheet';
import firebase from 'firebase';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID
} from 'react-native-dotenv';

import rootSagas from 'sagas';
import AppNavigator from './src/navigation/AppNavigator';
import configureStore, { sagaMiddleware } from './src/config/configureStore';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App = reduxifyNavigator(AppNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = configureStore();
sagaMiddleware.run(rootSagas);

// Initialize Firebase
const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
});

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
