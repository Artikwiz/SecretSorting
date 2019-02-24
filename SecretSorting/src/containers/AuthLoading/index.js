import React, { PureComponent } from 'react';
import { View, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';

import { sessionLoadData } from 'actions/session';

import styles from './styles';

class AuthLoading extends PureComponent {
  static navigationOptions = {
    header: () => null
  };

  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    const { handleSessionLoadData } = this.props;
    this.spin();
    // setTimeout(function() {
    //   handleSessionLoadData();
    // }, 1500);
    handleSessionLoadData();
  }

  componentDidUpdate() {
    const { navigation, isLoggedIn, isLoading } = this.props;
    if (!isLoading) {
      const path = isLoggedIn === true ? 'Home' : 'Login';
      navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: path })]
        })
      );
    }
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear
    }).start(() => this.spin());
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 227,
            height: 250,
            transform: [{ rotate: spin }]
          }}
          source={require('../../../assets/secret-sorting-logo.png')}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.session.isLoading,
    isLoggedIn: state.session.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSessionLoadData: () => {
      dispatch(sessionLoadData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoading);
