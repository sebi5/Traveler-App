import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {
  Icon
} from 'react-native-elements'

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Profile',
    headerLeft: (
      <Icon
        name="chevron-left"
        type="octicon"
        underlayColor="#0000"
        iconStyle={{marginLeft: 14}}
        onPress={() => navigation.goBack()}
      />
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
