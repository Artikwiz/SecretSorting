import { createBottomTabNavigator } from 'react-navigation';
import Home from 'containers/Home';

// eslint-disable-next-line no-undef
export default (HomeNavigator = createBottomTabNavigator(
  {
    Home: Home
  },
  {
    mode: 'modal',
    headerMode: 'float'
  }
));
