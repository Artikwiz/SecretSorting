import { createStackNavigator } from 'react-navigation';
import Home from '../containers/Home';

// eslint-disable-next-line no-undef
export default (AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  }
}));
