import { createStackNavigator } from 'react-navigation';
import Login from 'containers/Login';
import Register from 'containers/Register';
import AuthLoading from 'containers/AuthLoading';
import ProfilePicture from 'containers/ProfilePicture';
import Home from 'containers/Home';
import ProfileNavigator from 'navigation/ProfileNavigator';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { sessionLogOut } from 'redux/actions/session';

import { TouchableOpacity } from 'react-native';

// import Profile from 'containers/Profile';

// eslint-disable-next-line no-undef
export default (AppNavigator = createStackNavigator(
  {
    AuthLoading: AuthLoading,
    Login: Login,
    Register: Register,
    Home: Home,
    ProfileNavigator: {
      screen: ProfileNavigator,
      navigationOptions: ({ navigation }) => ({
        headerRight: (
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(sessionLogOut());
              navigation.navigate('AuthLoading');
            }}
          >
            <Feather name="log-out" size={20} color="black" style={{ paddingRight: 10 }} />
          </TouchableOpacity>
        )
      })
    },
    ProfilePicture: ProfilePicture
  },
  {
    mode: 'modal',
    headerMode: 'screen'
  }
));
