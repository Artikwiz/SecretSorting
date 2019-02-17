import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Button,
  View,
  Text,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { sessionLogIn } from 'redux/actions/session';

import styles from './styles';

class Login extends PureComponent {
  static navigationOptions = {
    header: () => null
  };

  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPwd: ''
    };
    this.inputs = {};
  }

  //TODO: Virer cette fonction
  tryAuth() {
    const email = 'artikwiz@gmail.com';
    const password = 'artiksecret';
    const { handleLogIn } = this.props;
    handleLogIn(email, password);
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  render() {
    const { userEmail, userPwd } = this.state;
    const { navigation } = this.props;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardAView}>
        <View style={styles.appTitleContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('../../../assets/secret-sorting-logo.png')}
          />
          {/* <Text style={styles.appTitle}>Secret Sorting</Text> */}
        </View>
        <View style={styles.formContainer}>
          <TextInput
            value={userEmail}
            onChangeText={userEmail => this.setState({ userEmail })}
            style={styles.textInput}
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            placeholder="Email Address"
            underlineColorAndroid="transparent"
            ref={input => {
              this.inputs['email'] = input;
            }}
            onSubmitEditing={() => {
              this.focusNextField('password');
            }}
          />
          <TextInput
            value={userPwd}
            onChangeText={userPwd => this.setState({ userPwd })}
            style={styles.textInput}
            autoCorrect={false}
            secureTextEntry
            returnKeyType="go"
            placeholder="Password"
            autoCapitalize="none"
            ref={input => {
              this.inputs['password'] = input;
            }}
          />
          <Button
            buttonStyle={styles.loginButton}
            onPress={() => this.handleLogIn(userEmail, userPwd)}
            title="LogIn"
          />
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerButton}>Create account</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogIn: (email, password) => {
      dispatch(sessionLogIn(email, password));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
