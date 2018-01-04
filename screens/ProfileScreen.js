import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import {
  Icon
} from 'react-native-elements';
import NavBackButton from '../components/NavBackButton';
import * as firebase from 'firebase';

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
        <Button
          title="Log Out"
          onPress={() => {
            firebase.auth().signOut()
            .catch((error) => {
              alert(error.errorMessage);
            });
          }}
        />
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
