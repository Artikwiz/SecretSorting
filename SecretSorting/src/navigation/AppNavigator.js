import { createStackNavigator } from 'react-navigation';
import Login from 'containers/Login';
import Register from 'containers/Register';
import AuthLoading from 'containers/AuthLoading';
import Profile from 'containers/Profile';
import Home from 'containers/Home';
// import HomeNavigator from './HomeNavigator';

// eslint-disable-next-line no-undef
export default (AppNavigator = createStackNavigator(
  {
    AuthLoading: AuthLoading,
    Login: Login,
    Register: Register,
    Home: Home,
    Profile: Profile
  },
  {
    mode: 'modal',
    headerMode: 'float'
  }
));
