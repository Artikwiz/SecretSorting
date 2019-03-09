import EStyleSheet from 'react-native-extended-stylesheet';
import { Constants } from 'expo';

export default EStyleSheet.create({
  topBar: {
    flex: 0.2,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: Constants.statusBarHeight + 10,
    paddingHorizontal: 10
  },
  bottomBar: {
    // paddingBottom: isIPhoneX ? 25 : 5,
    paddingBottom: 5,
    backgroundColor: 'transparent',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  }
});
