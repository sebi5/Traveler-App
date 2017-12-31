import React from 'react';
import {
  Platform
} from 'react-native';
import {
  Ionicons,
  Entypo,
  FontAwesome
} from '@expo/vector-icons';
import {
  TabNavigator,
  TabBarBottom
} from 'react-navigation';

import Colors from '../constants/Colors';

import NearbyStack from '../screens/NearbyStack';
import FeedScreen from '../screens/FeedScreen';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default TabNavigator({
  Nearby: {
    screen: NearbyStack,
    navigationOptions: {
      tabBarLabel: 'Nearby'
    }
  },
  Feed: {
    screen: FeedScreen,
    navigationOptions: {
      tabBarLabel: 'Feed'
    }
  },
  Message: {
    screen: MessageScreen,
    navigationOptions: {
      tabBarLabel: 'Message'
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile'
    }
  }
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
      const { routeName } = navigation.state;
      switch (routeName) {
      case 'Nearby':
        return (
          <Entypo
            name="location"
            size={26}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      case 'Feed':
        return (
          <FontAwesome
            name="feed"
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      case 'Message':
        return (
          <Ionicons
            name="ios-chatbubbles"
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      case 'Profile':
        return (
          <Ionicons
            name="md-settings"
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      }
    }
  }),
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false
});
