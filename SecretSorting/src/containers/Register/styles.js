import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  keyboardAView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  formContainer: {
    // backgroundColor: 'skyblue',
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  textInput: {
    height: 45,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'grey',
    // marginHorizontal: 15,
    marginVertical: 10,
    paddingHorizontal: 10
  },
  registerButton: {
    marginTop: 10
  }
});
