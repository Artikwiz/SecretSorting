import { createBottomTabNavigator } from 'react-navigation';
import Home from 'containers/Home';
import Friend from 'containers/Friend';

// eslint-disable-next-line no-undef
export default (HomeNavigator = createBottomTabNavigator(
  {
    Home: Home,
    Friend: Friend
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      renderIndicator: () => null,
      activeTintColor: 'white',
      activeBackgroundColor: 'red',
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: 'white'
      }
    }
  }
));
