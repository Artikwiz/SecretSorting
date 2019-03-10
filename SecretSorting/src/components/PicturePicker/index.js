import React, { PureComponent } from 'react';
import { View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

class PicturePicker extends PureComponent {
  onDeletePicture = () => {
    const { handlerDeletePicture, navigation } = this.props;
    handlerDeletePicture();
    navigation.goBack();
  };

  onValidatePicture = () => {
    const { handlerValidatePicture, navigation } = this.props;
    handlerValidatePicture();
    navigation.goBack();
  };

  render() {
    const { picture } = this.props;
    const { height, width } = Dimensions.get('window');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        /> */}
        {picture && (
          <ImageBackground source={{ uri: picture.uri }} style={{ width: width, height: height }}>
            <View style={styles.topBar}>
              <TouchableOpacity onPress={() => this.onDeletePicture()}>
                <AntDesign name="close" size={32} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onValidatePicture()}>
                <AntDesign name="check" size={32} color="white" />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        )}
      </View>
    );
  }
}

PicturePicker.propTypes = {
  picture: PropTypes.shape({
    uri: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    exif: PropTypes.string,
    base64: PropTypes.string
  }).isRequired,
  handlerValidatePicture: PropTypes.func.isRequired,
  handlerDeletePicture: PropTypes.func.isRequired
};

export default withNavigation(PicturePicker);
