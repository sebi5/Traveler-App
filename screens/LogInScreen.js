import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
  Keyboard,
  TouchableOpacity,
  Image,
} from 'react-native';
import NavBackButton from '../components/NavBackButton';

export default class LoginScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Login',
    headerLeft: (
      <NavBackButton navigation={navigation} />
    )
  });

  constructor(props) {
    super(props);
    this.state = {
      loginData: '',
      passData: '',
      isLoading: false,
      message: ''
    };
  }

  _onLoginPressed = () => {
    Keyboard.dismiss;
    const query = urlForQueryAndPage(this.state.loginData, this.state.passData, 'login');
    this._executeQuery(query);
  };

  render() {
    const spinner = this.state.isLoading ? <ActivityIndicator size='large'/> : null;
    const { navigate } = this.props.navigation;
    return (
      <ScrollView keyboardDismissMode="on-drag" contentContainerStyle={styles.container}>
        <Text style={styles.description}>
          Please Login
        </Text>
        <TextInput style={styles.login} placeholder="email" />
        <TextInput style={styles.pass} placeholder='password' secureTextEntry />
        <TouchableOpacity onPress={this._onLoginPressed} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Login</Text>
        </TouchableOpacity>
        {spinner}
        <Text style={styles.signup_text} >
          <Text onPress={ () => navigate('Signup') }>
            Sign Up
          </Text>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Text onPress={ () => alert('reset password!') }>
            Problem?
          </Text>
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  err_msg: {
    marginTop: 50,
    fontSize: 18,
    textAlign: 'center'
  },
  signup_text: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    color: 'black',
    textAlign: 'center'
  },
  description: {
    marginTop: 150,
    marginBottom: 30,
    fontSize: 25,
    textAlign: 'center'
  },
  login: {
    height: 48,
    padding: 4,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    width: '90%',
    backgroundColor: 'white'
  },
  pass: {
    height: 48,
    padding: 4,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    width: '90%',
    backgroundColor: 'white'
  },
  submitButton: {
    marginTop: 40,
    marginBottom: 10,
    height: 55,
    backgroundColor: '#9fb8d0',
    borderWidth: 1,
    borderColor: '#9fb8d0',
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitButtonText:{
    color: 'black',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
  }
});
