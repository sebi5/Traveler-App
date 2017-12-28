import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class NearbyScreen extends React.Component {
  static navigationOptions = {
    title: 'Nearby'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Nearby</Text>
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
