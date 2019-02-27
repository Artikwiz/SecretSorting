import firebase from 'firebase';

function writeUserData(userId, name, email, imageUrl) {
  //   firebase
  //     .database()
  //     .ref('users/' + userId)
  //     .set({
  //       username: name,
  //       email: email,
  //       profile_picture: imageUrl
  //     });
  firebase
    .database()
    .ref('users/' + userId)
    .set(
      {
        username: name,
        email: email,
        profile_picture: imageUrl
      },
      function(error) {
        if (error) {
          // The write failed...
        } else {
          // Data saved successfully!
        }
      }
    );
}

function addUserFriends(users[]) {
  return;
}

export { writeUserData, addUserFriends };
