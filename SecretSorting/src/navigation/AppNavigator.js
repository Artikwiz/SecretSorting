import { createStackNavigator } from 'react-navigation';
import Login from 'containers/Login';
import Home from 'containers/Home';
import Register from 'containers/Register';
import AuthLoading from 'containers/AuthLoading';

// eslint-disable-next-line no-undef
export default (AppNavigator = createStackNavigator(
  {
    AuthLoading: {
      screen: AuthLoading
    },
    Login: {
      screen: Login
    },
    Home: {
      screen: Home
    },
    Register: {
      screen: Register
    }
  },
  {
    mode: 'modal',
    headerMode: 'float'
  }
));
