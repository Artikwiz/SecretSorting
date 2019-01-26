import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import firebase from 'firebase';

import AppNavigator from './src/navigation/AppNavigator';
import configureStore from './src/config/configureStore';

const App = reduxifyNavigator(AppNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = configureStore();

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDkpC0wvm7jv9ElEvcmMehstO9Khvsg_PU',
  authDomain: 'secretsortingapi.firebaseapp.com',
  databaseURL: 'https://secretsortingapi.firebaseio.com',
  projectId: 'secretsortingapi',
  storageBucket: 'secretsortingapi.appspot.com',
  messagingSenderId: '193031733979'
};

firebase.initializeApp(config);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
