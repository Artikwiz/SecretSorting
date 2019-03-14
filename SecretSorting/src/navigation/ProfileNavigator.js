import { createBottomTabNavigator } from 'react-navigation';
import Profile from 'containers/Profile';
import Friend from 'containers/Friend';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
// eslint-disable-next-line no-undef
export default (ProfileNavigator = createBottomTabNavigator(
  {
    Profile: Profile,
    Friend: Friend
  },
  {
    initialRouteName: 'Profile',
    swipeEnabled: true,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Profile') {
          return <AntDesign name="profile" size={25} color={tintColor} />;
        } else if (routeName === 'Friend') {
          return <AntDesign name="team" size={25} color={tintColor} />;
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
));
