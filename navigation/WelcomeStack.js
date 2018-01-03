import React from 'react';
import {
  StackNavigator
} from 'react-navigation';

import WelcomeScreen from '../screens/WelcomeScreen';

export default StackNavigator({
  Main: { screen: WelcomeScreen }
});
