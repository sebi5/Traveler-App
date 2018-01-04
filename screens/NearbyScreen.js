import React from 'react';
import {
  Platform,
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import {
  Icon
} from 'react-native-elements';
import {
  Constants,
  Location,
  Permissions
} from 'expo';
import ActionSheet from 'react-native-actionsheet';
import * as firebase from 'firebase';
import GeoFire from 'geofire';

const ACTIONSHEET_TITLE = 'Update List';
const ACTIONSHEET_OPTIONS = ['Hide My Location', 'Show My Location', 'View All', 'View Males', 'View Females', 'Cancel'];
const CANCEL_INDEX = 5;
const DESTRUCTIVE_INDEX = 5;

let showActionSheet = null;

export default class NearbyScreen extends React.Component {
  static navigationOptions = {
    title: 'Nearby',
    headerLeft: (
      <Icon
        name="sync"
        type="octicon"
        underlayColor="#0000"
        iconStyle={{marginLeft: 14}}
        onPress={() => console.log('hello')}
      />
    ),
    headerRight: (
      <Icon
        name="gear"
        type="octicon"
        underlayColor="#0000"
        iconStyle={{marginRight: 7}}
        onPress={() => showActionSheet()}
      />
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      location: null,
      errorMessage: null,
      selected: ''
    };
    this.handlePress = this.handlePress.bind(this);
    this.showActionSheet = this.showActionSheet.bind(this);
    showActionSheet = this.showActionSheet;
    this.geofire = new GeoFire(firebase.database().ref('locations'));
  }

  showActionSheet() {
    this.ActionSheet.show();
  }

  handlePress(i) {
    this.setState({
      selected: i
    });
  }

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
    const uid = firebase.auth().currentUser.uid;
    this.geofire.set(uid, [location.coords.latitude, location.coords.longitude])
    .then(function() {
      alert("Provided key has been added to GeoFire");
    }, function(error) {
      alert("Error: " + error);
    });
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
        <Text>{firebase.auth().currentUser.uid}</Text>
        <Text>Nearby</Text>
        <Text>{text}</Text>
        <Button
          title="Go to Profile"
          onPress={ () => navigate('ProfileTemp') }
        />
        <ActionSheet
          ref={actionSheet => this.ActionSheet = actionSheet}
          title={ACTIONSHEET_TITLE}
          options={ACTIONSHEET_OPTIONS}
          cancelButtonIndex={CANCEL_INDEX}
          destructiveButtonIndex={DESTRUCTIVE_INDEX}
          onPress={this.handlePress}
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
