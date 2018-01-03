import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {
  Icon
} from 'react-native-elements';
import NavBackButton from '../components/NavBackButton';

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Profile',
    headerLeft: (
      <NavBackButton navigation={navigation} />
    )
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
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
