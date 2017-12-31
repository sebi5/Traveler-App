import React from 'react';
import {
  Platform,
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import {
  Constants,
  Location,
  Permissions
} from 'expo';

export default class NearbyScreen extends React.Component {
  static navigationOptions = {
    title: 'Nearby'
  };

  state = {
    location: null,
    errorMessage: null
  };

  componentWillMount() {
     if (Platform.OS === 'android' && !Constants.isDevice) {
       this.setState({
         errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
       });
     } else {
       this._getLocationAsync();
     }
   }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {
    const { navigate } = this.props.navigation;
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }
    return (
      <View style={styles.container}>
        <Text>Nearby</Text>
        <Text>{text}</Text>
        <Button
          title="Go to Profile"
          onPress={ () => navigate('Profile') }
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
