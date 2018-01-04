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
  Picker
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';
import NavBackButton from '../components/NavBackButton';
import * as firebase from 'firebase';

export default class SignUpScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Sign Up',
    headerLeft: (
      <NavBackButton navigation={navigation} />
    )
  });

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      isLoading: false,
      message: ''
    };
  }

  _onLoginPressed = () => {
    const { name, email, password } = this.state;
    Keyboard.dismiss
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      const uid = firebase.auth().currentUser.uid;
      firebase.database().ref('users/' + uid).set({
        username: name,
        email: email,
      });
      alert('success');
    })
    .catch((error) => {
      alert(error.message);
    });
  };

  render() {
    const spinner = this.state.isLoading ? <ActivityIndicator size='large'/> : null;
    const { navigate } = this.props.navigation;
    return (
      <ScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={styles.container}
      >
        <TextInput style={styles.textInput} placeholder="Your name" onChangeText={(text) => this.setState({ name: text })} />
        <TextInput style={styles.textInput} placeholder="Your email" onChangeText={(text) => this.setState({ email: text })} />
        <TextInput style={styles.textInput} placeholder="Choose a password" onChangeText={(text) => this.setState({ password: text })} secureTextEntry />
        <RadioForm
          radio_props={[{ label: 'Male ♂', value: 0 }, { label: 'Female ♀', value: 1 }]}
          initial={0}
          formHorizontal={true}
          labelHorizontal={true}
          buttonColor="#2196f3"
          animation={false}
          onPress={(value) => this.setState({value:value}) }
        />
        <Text style={styles.pickerLabel}>Birth Month/Year</Text>
        <View style={{ flexDirection: 'row' }}>
          <Picker
            style={{width: '46%'}}
            selectedValue={( this.state && this.state.pickerValue) || 'May' }
            onValueChange={ (value) => this.setState({ pickerValue: value }) }
          >
            <Picker.Item label="January" value="January" />
            <Picker.Item label="February" value="February" />
            <Picker.Item label="March" value="March" />
            <Picker.Item label="April" value="April" />
            <Picker.Item label="March" value="March" />
            <Picker.Item label="April" value="April" />
            <Picker.Item label="May" value="May" />
            <Picker.Item label="June" value="June" />
            <Picker.Item label="July" value="July" />
            <Picker.Item label="August" value="August" />
            <Picker.Item label="September" value="September" />
            <Picker.Item label="October" value="October" />
            <Picker.Item label="November" value="November" />
            <Picker.Item label="December" value="December" />
          </Picker>
          <Picker
            style={{width: '46%'}}
            selectedValue={( this.state && this.state.pickerValue2) || '1996' }
            onValueChange={ (value) => this.setState({ pickerValue2: value }) }
          >
            <Picker.Item label="1948" value="1948" />
            <Picker.Item label="1949" value="1949" />

            <Picker.Item label="1950" value="1950" />
            <Picker.Item label="1951" value="1951" />
            <Picker.Item label="1952" value="1952" />
            <Picker.Item label="1953" value="1953" />
            <Picker.Item label="1954" value="1954" />
            <Picker.Item label="1955" value="1955" />

            <Picker.Item label="1956" value="1956" />
            <Picker.Item label="1957" value="1957" />
            <Picker.Item label="1958" value="1958" />
            <Picker.Item label="1959" value="1959" />
            <Picker.Item label="1960" value="1960" />
            <Picker.Item label="1961" value="1961" />

            <Picker.Item label="1962" value="1962" />
            <Picker.Item label="1963" value="1963" />
            <Picker.Item label="1964" value="1964" />
            <Picker.Item label="1965" value="1965" />
            <Picker.Item label="1966" value="1966" />
            <Picker.Item label="1967" value="1967" />

            <Picker.Item label="1968" value="1968" />
            <Picker.Item label="1969" value="1969" />
            <Picker.Item label="1970" value="1970" />
            <Picker.Item label="1971" value="1971" />
            <Picker.Item label="1972" value="1972" />
            <Picker.Item label="1973" value="1973" />

            <Picker.Item label="1974" value="1974" />
            <Picker.Item label="1975" value="1975" />
            <Picker.Item label="1976" value="1976" />
            <Picker.Item label="1977" value="1977" />
            <Picker.Item label="1978" value="1978" />
            <Picker.Item label="1979" value="1979" />

            <Picker.Item label="1980" value="1980" />
            <Picker.Item label="1981" value="1981" />
            <Picker.Item label="1982" value="1982" />
            <Picker.Item label="1983" value="1983" />
            <Picker.Item label="1984" value="1984" />
            <Picker.Item label="1985" value="1985" />

            <Picker.Item label="1986" value="1986" />
            <Picker.Item label="1987" value="1987" />
            <Picker.Item label="1988" value="1988" />
            <Picker.Item label="1989" value="1989" />
            <Picker.Item label="1990" value="1990" />
            <Picker.Item label="1991" value="1991" />

            <Picker.Item label="1992" value="1992" />
            <Picker.Item label="1993" value="1993" />
            <Picker.Item label="1994" value="1994" />
            <Picker.Item label="1995" value="1995" />
            <Picker.Item label="1996" value="1996" />
            <Picker.Item label="1997" value="1997" />

            <Picker.Item label="1998" value="1998" />
            <Picker.Item label="1999" value="1999" />
            <Picker.Item label="2001" value="2001" />
            <Picker.Item label="2002" value="2002" />
            <Picker.Item label="2003" value="2003" />
            <Picker.Item label="2004" value="2004" />
            <Picker.Item label="2005" value="2005" />
            <Picker.Item label="2006" value="2006" />
          </Picker>
        </View>
        <TouchableOpacity onPress={this._onLoginPressed} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Sign Up</Text>
        </TouchableOpacity>
        {spinner}
        <Text style={styles.signup_text} >
          <Text onPress={() => navigate('Login') }>
            Login
          </Text>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Text onPress={() => alert('problem!')}>
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
  textInput: {
    fontSize: 20,
    backgroundColor: 'white',
    height: 48,
    width: '90%',
    padding: 4,
    marginTop: 10
  },
  pickerLabel: {
    fontSize: 19,
    marginTop: 20,
    marginBottom: 0
  },
  errorMessage: {
    marginTop: 50,
    fontSize: 18,
    textAlign: 'center'
  },
  signUpText: {
    marginTop: 20,
    marginBottom: 60,
    fontSize: 16,
    color: 'black',
    textAlign: 'center'
  },
  description: {
    marginTop: 20,
    marginBottom: 15,
    fontSize: 25,
    textAlign: 'center'
  },
  submitButton: {
    marginTop: 30,
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
