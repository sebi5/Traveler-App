import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Traveler'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
