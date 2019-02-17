import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  keyboardAView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  appTitleContainer: {
    flex: 1,
    // backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  appTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  formContainer: {
    // backgroundColor: 'skyblue',
    flex: 1,
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
  loginButton: {
    marginTop: 10
  },
  registerButton: {
    textAlign: 'center',
    marginVertical: 5
  }
});
