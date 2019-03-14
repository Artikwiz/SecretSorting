import React, { PureComponent } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';

class Profile extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Button onPress={() => navigation.navigate('ProfilePicture')} title="Take a picture" />
      </View>
    );
  }
}

export default connect(
  null,
  null
)(Profile);
