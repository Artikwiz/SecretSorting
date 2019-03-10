import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import EStyleSheet from 'react-native-extended-stylesheet';
import rootSagas from 'sagas';
import AppNavigator from './src/navigation/AppNavigator';
import configureStore, { sagaMiddleware } from './src/config/configureStore';
import configureFirebase from './src/config/configureFirebase';

// if (__DEV__) {
//   import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
// }

const App = reduxifyNavigator(AppNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = configureStore();
sagaMiddleware.run(rootSagas);

configureFirebase();

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
