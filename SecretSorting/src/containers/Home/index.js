import React, { PureComponent } from 'react';
import { Avatar } from 'react-native-elements';
import { Text, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

class Home extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Avatar
          rounded
          size="small"
          source={require('../../../assets/face-2.jpg')}
          containerStyle={{ marginRight: 10 }}
          onPress={() => {
            navigation.navigate('Profile');
          }}
        />
      )
    };
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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

export default Home;
