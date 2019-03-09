import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import CameraController from 'components/CameraController';
import PicturePicker from 'components/PicturePicker';

// import styles from './styles';

class ProfilePicture extends PureComponent {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  constructor(props) {
    super(props);
    this.handlerTakePicture = this.handlerTakePicture.bind(this);
    this.handlerValidatePicture = this.handlerValidatePicture.bind(this);
    this.handlerDeletePicture = this.handlerDeletePicture.bind(this);
    this.state = {
      photo: null
    };
  }

  handlerTakePicture(object) {
    this.setState({
      photo: object
    });
  }

  handlerValidatePicture() {
    // TODO: call firebase API pour update photo URL
  }

  handlerDeletePicture() {
    this.setState({
      photo: null
    });
  }

  render() {
    const { photo } = this.state;
    return photo === null ? (
      <CameraController handlerTakePicture={this.handlerTakePicture} />
    ) : (
      <PicturePicker
        picture={photo}
        handlerValidatePicture={this.handlerValidatePicture}
        handlerDeletePicture={this.handlerDeletePicture}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // handleLogIn: (email, password) => {
    //   dispatch(sessionLogIn(email, password));
    // }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProfilePicture);
