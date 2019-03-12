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
import { NavigationActions, StackActions } from 'react-navigation';
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

  componentDidUpdate() {
    const { isLoggedIn, navigation } = this.props;
    if (isLoggedIn == true) {
      navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'HomeNavigator' })]
        })
      );
    }
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  render() {
    const { userEmail, userPwd } = this.state;
    const { navigation, handleLogIn } = this.props;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardAView}>
        <View style={styles.appTitleContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('../../../assets/secret-sorting-logo.png')}
          />
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
            autoCapitalize="none"
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
            onPress={() => handleLogIn(userEmail, userPwd)}
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

const mapStateToProps = state => {
  return {
    isLoggedIn: state.session.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogIn: (email, password) => {
      dispatch(sessionLogIn(email, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
