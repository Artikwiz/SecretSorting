import React, { PureComponent } from 'react';
import { Avatar } from 'react-native-elements';
import { View, Text } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FlatList, RectButton } from 'react-native-gesture-handler';
// You can import from local files
import SwipeableSortRow from 'components/SwipeableSortRow';
import styles from './styles';

const Row = ({ item }) => (
  <RectButton style={styles.rectButton} onPress={() => alert(item.from)}>
    <Text style={styles.fromText}>{item.from}</Text>
    <Text numberOfLines={2} style={styles.messageText}>
      {item.message}
    </Text>
    <Text style={styles.dateText}>
      {item.when} {'❭'}
    </Text>
  </RectButton>
);

const SwipeableRow = ({ item }) => {
  return (
    <SwipeableSortRow>
      <Row item={item} />
    </SwipeableSortRow>
  );
};

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
        <FlatList
          data={DATA}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => <SwipeableRow item={item} />}
        />
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

const DATA = [
  {
    from: "D'Artagnan",
    when: '3:11 PM',
    message:
      'Unus pro omnibus, omnes pro uno. Nunc scelerisque, massa non lacinia porta, quam odio dapibus enim, nec tincidunt dolor leo non neque'
  },
  {
    from: 'Aramis',
    when: '11:46 AM',
    message:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus hendrerit ligula dignissim maximus aliquet. Integer tincidunt, tortor at finibus molestie, ex tellus laoreet libero, lobortis consectetur nisl diam viverra justo.'
  },
  {
    from: 'Athos',
    when: '6:06 AM',
    message:
      'Sed non arcu ullamcorper, eleifend velit eu, tristique metus. Duis id sapien eu orci varius malesuada et ac ipsum. Ut a magna vel urna tristique sagittis et dapibus augue. Vivamus non mauris a turpis auctor sagittis vitae vel ex. Curabitur accumsan quis mauris quis venenatis.'
  },
  {
    from: 'Porthos',
    when: 'Yesterday',
    message:
      'Vivamus id condimentum lorem. Duis semper euismod luctus. Morbi maximus urna ut mi tempus fermentum. Nam eget dui sed ligula rutrum venenatis.'
  },
  {
    from: 'Domestos',
    when: '2 days ago',
    message:
      'Aliquam imperdiet dolor eget aliquet feugiat. Fusce tincidunt mi diam. Pellentesque cursus semper sem. Aliquam ut ullamcorper massa, sed tincidunt eros.'
  },
  {
    from: 'Cardinal Richelieu',
    when: '2 days ago',
    message:
      'Pellentesque id quam ac tortor pellentesque tempor tristique ut nunc. Pellentesque posuere ut massa eget imperdiet. Ut at nisi magna. Ut volutpat tellus ut est viverra, eu egestas ex tincidunt. Cras tellus tellus, fringilla eget massa in, ultricies maximus eros.'
  },
  {
    from: "D'Artagnan",
    when: 'Week ago',
    message:
      'Aliquam non aliquet mi. Proin feugiat nisl maximus arcu imperdiet euismod nec at purus. Vestibulum sed dui eget mauris consequat dignissim.'
  },
  {
    from: 'Cardinal Richelieu',
    when: '2 weeks ago',
    message:
      'Vestibulum ac nisi non augue viverra ullamcorper quis vitae mi. Donec vitae risus aliquam, posuere urna fermentum, fermentum risus. '
  }
];
