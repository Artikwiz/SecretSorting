import { firestore } from 'firebase';

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

export { createUser, updateUser, addFriendsToUser };
