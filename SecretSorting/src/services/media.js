import firebase from 'firebase';

// TODO: change uploadProfilePOicture to uploadPicture
const uploadProfilePicture = async (uri, imageName) => {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function() {
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  var ref = firebase
    .storage()
    .ref()
    .child('profilePictures/' + imageName);
  const snapshot = await ref.put(blob);
  blob.close();
  return snapshot.ref.getDownloadURL();
};

export default uploadProfilePicture;
