import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import { Feather } from '@expo/vector-icons';

import { sessionLogOut } from 'redux/actions/session';

class Profile extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.state.params.onPressLogOut()}>
          <Feather name="log-out" size={20} color="black" style={{ paddingRight: 10 }} />
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
    const { navigation } = this.props;
    return (
      <View>
        <Button onPress={() => navigation.navigate('ProfilePicture')} title="Take a picture" />
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
