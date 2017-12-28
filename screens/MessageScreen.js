import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class MessageScreen extends React.Component {
  static navigationOptions = {
    title: 'Message'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Message</Text>
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
