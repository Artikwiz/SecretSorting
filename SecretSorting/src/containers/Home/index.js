import React, { PureComponent } from 'react';
import { Avatar } from 'react-native-elements';
import { View } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
// import GestureHandler from 'react-native-gesture-handler';

import styles from './styles';

class Home extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const photoURL = navigation.getParam('photoURL');
    return {
      headerRight: photoURL ? (
        <Avatar
          rounded
          size="small"
          source={{ uri: photoURL }}
          containerStyle={{ marginRight: 10 }}
          onPress={() => {
            navigation.navigate('Profile');
          }}
        />
      ) : (
        <Avatar
          rounded
          icon={{ name: 'user', type: 'font-awesome' }}
          onPress={() => {
            navigation.navigate('Profile');
          }}
        />
      )
    };
  };

  constructor(props) {
    super(props);
    const { photoURL, navigation } = this.props;
    navigation.setParams({ photoURL: photoURL });
    this.state = {
      photoUri: photoURL
    };
  }

  componentDidUpdate() {
    const { photoURL, navigation } = this.props;
    const { photoUri } = this.state;
    if (photoURL !== photoUri) {
      navigation.setParams({ photoURL: photoURL });
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        photoUri: photoURL
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="New Task"
            onPress={() => console.log('notes tapped!')}
          >
            <Ionicons name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor="#3498db" title="Notifications" onPress={() => {}}>
            <Ionicons name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor="#1abc9c" title="All Tasks" onPress={() => {}}>
            <Ionicons name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    photoURL: state.session.user ? state.session.user.photoURL : null
  };
};

export default connect(mapStateToProps)(Home);
