import React, { PureComponent } from 'react';
import { TextInput, KeyboardAvoidingView, Button } from 'react-native';
import firebase from 'firebase';

export default class Login extends PureComponent {
  static navigationOptions = () => {
    return {
      header: () => null
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      text: 'toto'
    };
  }

  tryAuth() {
    const email = 'artikwiz@gmail.com';
    const password = 'artiksecret';
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      })
      .then(response => console.log(response));
  }

  render() {
    const { text } = this.state;
    return (
      <KeyboardAvoidingView>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
          value={text}
        />

        <Button
          onPress={() => this.tryAuth()}
          title="Learn More"
          color="#841584"
          //   accessibilityLabel="Learn more about this purple button"
        />
      </KeyboardAvoidingView>
    );
  }
}
