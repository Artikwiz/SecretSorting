import firebase from 'firebase';

const sessionLogIn = user =>
  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
    })
    .then(response => response.user.toJSON());

const onSessionLogOut = () => firebase.auth().signOut();

const sessionRegister = user =>
  firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/email-already-in-use') {
        alert('Email already used');
      } else {
        alert(errorMessage);
      }
    });

const onAuthStateChanged = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        resolve(user.toJSON());
      } else {
        reject(new Error('Ops!'));
      }
    });
  });
};

export { sessionLogIn, sessionRegister, onAuthStateChanged, onSessionLogOut };
