import { createStackNavigator } from 'react-navigation';
import Login from 'containers/Login';
import Home from 'containers/Home';
import Register from 'containers/Register';

// eslint-disable-next-line no-undef
export default (AppNavigator = createStackNavigator(
  {
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
