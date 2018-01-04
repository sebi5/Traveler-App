import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';
import WelcomeStack from './navigation/WelcomeStack';
import * as firebase from 'firebase';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const config = {
      apiKey: 'AIzaSyCvgtrI0fn0FHBYiIn4spb5Ac8vg1Ucd4g',
      authDomain: 'traveler-84bf6.firebaseapp.com',
      databaseURL: 'https://traveler-84bf6.firebaseio.com',
      storageBucket: 'gs://traveler-84bf6.appspot.com',
    };
    firebase.initializeApp(config);

    this.state = {
      isLoadingComplete: false,
      emptyScreen: true,
      userAuthenticated: false,
    }

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        emptyScreen: false,
        userAuthenticated: user != null,
      });
    });
  }

  render() {
    let frontScreen;
    if (!this.state.emptyScreen) {
      frontScreen = this.state.userAuthenticated ? <RootNavigation /> : <WelcomeStack />;
    }

    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          {frontScreen}
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
