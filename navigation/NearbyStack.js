import React from 'react';
import {
  StackNavigator
} from 'react-navigation';

import NearbyScreen from '../screens/NearbyScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default StackNavigator({
  Main: { screen: NearbyScreen },
  ProfileTemp: { screen: ProfileScreen }
});
