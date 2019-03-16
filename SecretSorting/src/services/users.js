import firebase, { firestore } from 'firebase';

import uploadProfilePicture from 'services/media';

const getSort = sort => {
  return new Promise(resolve => {
    require('firebase/firestore');
    const sortRef = firestore()
      .collection('sorts')
      .doc(sort.id_sort);
    sortRef.on(
      'value',
      function(snapshot) {
        console.log(snapshot.val());
      },
      function(errorObject) {
        console.log('The read failed: ' + errorObject.code);
      }
    );
  });
};

const createSort = sort => {
  return new Promise(resolve => {
    require('firebase/firestore');
    const sortRef = firestore()
      .collection('sorts')
      .doc(sort.id_sort);
    sortRef.set({
      members: sort.members,
      process_status: sort.process_status,
      results: sort.results
    });
  })
    .then(function() {
      console.log('Sort added successfully.');
    })
    .catch(function(error) {
      console.error('Error writing document: ', error);
    });
};

const updateSort = sort => {
  return new Promise(resolve => {
    require('firebase/firestore');
    const sortRef = firestore()
      .collection('sorts')
      .doc(sort.id_sort);
    sortRef.update(...sort);
    resolve();
  }).catch(function(error) {
    console.error('Error writing document: ', error);
  });
};

const deleteSort = sort => {
  return new Promise(resolve => {
    require('firebase/firestore');
    const sortRef = firestore()
      .collection('sorts')
      .doc(sort.id_sort)
      .delete()
      .then(function() {
        console.log('Sort successfully deleted.');
      });
  }).catch(function(error) {
    console.error('Error removing document: ', error);
  });
};

const getUser = user => {
  return new Promise(resolve => {
    require('firebase/firestore');
    const userRef = firestore()
      .collection('users')
      .doc(user.uid);
    userRef.on(
      'value',
      function(snapshot) {
        console.log(snapshot.val());
      },
      function(errorObject) {
        console.log('The read failed: ' + errorObject.code);
      }
    );
  });
};

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
  })
    .then(function() {
      console.log('User added successfully.');
    })
    .catch(function(error) {
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

const deleteUser = user => {
  return new Promise(resolve => {
    require('firebase/firestore');
    const userRef = firestore()
      .collection('users')
      .doc(user.uid)
      .delete()
      .then(function() {
        console.log('User successfully deleted.');
      });
  }).catch(function(error) {
    console.error('Error removing document: ', error);
  });
};

const addMembersToSort = (sort, users) => {
  return new Promise(resolve => {
    require('firebase/firestore');
    const sortRef = firestore()
      .collection('sorts')
      .doc(sort.uid);
    users.map(elem => {
      sortRef.update({
        members: firestore.FieldValue.arrayUnion(elem)
      });
    });
    resolve();
  }).catch(function(error) {
    console.error('Error writing document: ', error);
  });
};

const deleteMembersToSort = (user, friends) => {
  return new Promise(resolve => {
    require('firebase/firestore');
    const sortRef = firestore()
      .collection('sorts')
      .doc(sort.uid);
    users.map(elem => {
      sortRef.update({
        members: firestore.FieldValue.arrayRemove(elem)
      });
    });
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

const deleteFriendsToUser = (user, friends) => {
  return new Promise(resolve => {
    require('firebase/firestore');
    const userRef = firestore()
      .collection('users')
      .doc(user.uid);
    friends.map(elem => {
      userRef.update({
        friends: firestore.FieldValue.arrayRemove(elem)
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

export {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getSort,
  createSort,
  updateSort,
  deleteSort,
  addFriendsToUser,
  deleteFriendsToUser,
  addMembersToSort,
  deleteMembersToSort,
  updateUserProfilePicture
};
