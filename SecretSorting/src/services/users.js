import firebase, { firestore } from 'firebase';

import uploadProfilePicture from 'services/media';

const createUser = user => {
  return new Promise(resolve => {
    require('firebase/firestore');
    const userRef = firestore()
      .collection('users')
      .doc(user.uid);
    userRef.set({
      email: user.email,
      profile_picture: user.photoURL
    });
    // userRef.collection('friends').add({ poto: 'Hugo' });
    resolve();
  }).catch(function(error) {
    console.error('Error writing document: ', error);
  });
};

const updateUser = user => {
  return new Promise(resolve => {
    require('firebase/firestore');
    const userRef = firestore()
      .collection('users')
      .doc(user.uid);
    userRef.update(
      //   {
      //   email: user.email,
      //   profile_picture: user.photoURL
      // }
      ...user
    );
    // userRef.collection('friends').add({ poto: 'Hugo' });
    resolve();
  }).catch(function(error) {
    console.error('Error writing document: ', error);
  });
};

const addFriendsToUser = (user, friends) => {
  return new Promise(resolve => {
    require('firebase/firestore');
    const userRef = firestore()
      .collection('users')
      .doc(user.uid);
    friends.map(elem => {
      userRef.update({
        friends: firestore.FieldValue.arrayUnion(elem)
      });
    });
    resolve();
  }).catch(function(error) {
    console.error('Error writing document: ', error);
  });
};

const updateUserProfilePicture = photoObj => {
  return new Promise(resolve => {
    require('firebase/firestore');
    const user = firebase.auth().currentUser;
    let result = uploadProfilePicture(photoObj.uri, user.uid).then(imageUrl => {
      return user
        .updateProfile({
          photoURL: imageUrl
        })
        .then(() => {
          const updateUser = firebase.auth().currentUser.toJSON();
          return updateUser;
        });
    });
    resolve(result);
  }).catch(function(error) {
    console.error('Error update profile picture : ', error);
  });
};

export { createUser, updateUser, addFriendsToUser, updateUserProfilePicture };
