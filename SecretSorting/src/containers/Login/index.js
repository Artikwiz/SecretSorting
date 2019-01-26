import React, { PureComponent } from 'react';
import { TextInput, KeyboardAvoidingView, Button } from 'react-native';
import { connect } from 'react-redux';
import { sessionLogIn } from 'redux/actions/session';

class Login extends PureComponent {
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
    const { handleLogIn } = this.props;
    handleLogIn(email, password);
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
        {/* <ActivityIndicator size="large" color="#0000ff" /> */}
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
