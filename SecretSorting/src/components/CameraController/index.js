import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import styles from './styles';

class CameraController extends PureComponent {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snap = async () => {
    const { handlerTakePicture } = this.props;
    if (this.camera) {
      const pictureObject = await this.camera.takePictureAsync({
        base64: true,
        allowsEditing: true
      });
      handlerTakePicture(pictureObject);
    }
  };

  renderTopBar() {
    const { type } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              type:
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
            });
          }}
        >
          <Feather name="repeat" size={32} color="white" />
        </TouchableOpacity>
      </View>
    );
  }

  renderBottomBar() {
    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={this.snap} style={{ alignSelf: 'flex-end' }}>
          <Ionicons name="ios-radio-button-on" size={70} color="white" />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { hasCameraPermission, type } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={type}
            ref={ref => {
              this.camera = ref;
            }}
          >
            {this.renderTopBar()}
            {this.renderBottomBar()}
          </Camera>
        </View>
      );
    }
  }
}

CameraController.propTypes = {
  handlerTakePicture: PropTypes.func.isRequired
};

export default withNavigation(CameraController);
