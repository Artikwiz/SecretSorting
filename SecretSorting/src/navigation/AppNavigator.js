import { createStackNavigator } from 'react-navigation';
import Home from '../containers/Home';
import Login from '../containers/Login';

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
