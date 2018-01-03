import React from 'react';
import {
  StackNavigator
} from 'react-navigation';

import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LogInScreen from '../screens/LogInScreen';

export default StackNavigator({
  Main: { screen: WelcomeScreen },
  SignUp: { screen: SignUpScreen },
  LogIn: { screen: LogInScreen }
});
