import { createStackNavigator } from 'react-navigation';
import Login from 'containers/Login';
import Home from 'containers/Home';

// eslint-disable-next-line no-undef
export default (AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Home: {
      screen: Home
    }
  },
  {
    mode: 'modal',
    headerMode: 'float'
  }
));
