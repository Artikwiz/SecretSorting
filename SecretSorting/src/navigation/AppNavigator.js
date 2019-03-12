import { createStackNavigator } from 'react-navigation';
import Login from 'containers/Login';
import Register from 'containers/Register';
import AuthLoading from 'containers/AuthLoading';
import Profile from 'containers/Profile';
import ProfilePicture from 'containers/ProfilePicture';
// import HomeNavigator from './HomeNavigator';
import Home from 'containers/Home';

// eslint-disable-next-line no-undef
export default (AppNavigator = createStackNavigator(
  {
    AuthLoading: AuthLoading,
    Login: Login,
    Register: Register,
    HomeNavigator: Home,
    Profile: Profile,
    ProfilePicture: ProfilePicture
  },
  {
    mode: 'modal',
    headerMode: 'float'
  }
));
