import React, { PureComponent } from 'react';
import { TextInput, KeyboardAvoidingView, Button, View } from 'react-native';
import { connect } from 'react-redux';

import { sessionRegister } from 'redux/actions/session';
import styles from './styles';

class Register extends PureComponent {
  static navigationOptions = {
    title: 'Account Creation'
  };

  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPwd: ''
    };
    this.inputs = {};
  }

  onPressRegister() {
    const { userEmail, userPwd } = this.state;
    const { handleRegister } = this.props;
    handleRegister(userEmail, userPwd);
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  render() {
    const { userEmail, userPwd } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardAView}>
        <View style={styles.formContainer}>
          <TextInput
            value={userEmail}
            onChangeText={userEmail => this.setState({ userEmail })}
            style={styles.textInput}
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            placeholder="Email Address"
            autoCapitalize="none"
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
            buttonStyle={styles.registerButton}
            onPress={() => this.onPressRegister()}
            title="Register"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleRegister: (email, password) => {
      dispatch(sessionRegister(email, password));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
