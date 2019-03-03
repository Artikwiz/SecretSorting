import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { sessionLogOut } from 'redux/actions/session';

class Profile extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.state.params.onPressLogOut()}>
          <Icon name="log-out" type="feather" size={20} color="black" />
        </TouchableOpacity>
      )
    };
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      onPressLogOut: this.onPressLogOut
    });
  }

  onPressLogOut = () => {
    const { navigation, handleLogOut } = this.props;
    handleLogOut();
    navigation.navigate('AuthLoading');
  };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogOut: () => {
      dispatch(sessionLogOut());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Profile);
