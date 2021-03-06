export const GET_USER = 'GET_USER';
export const GET_USER_SUCCEED = 'GET_USER_SUCCEED';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCEED = 'UPDATE_USER_SUCCEED';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';

export const UPDATE_USER_PROFILE_PICTURE = 'UPDATE_USER_PROFILE_PICTURE';
export const UPDATE_USER_PROFILE_PICTURE_SUCCEED = 'UPDATE_USER_PROFILE_PICTURE_SUCCEED';
export const UPDATE_USER_PROFILE_PICTURE_ERROR = 'UPDATE_USER_PROFILE_PICTURE_ERROR';

export const getUser = uid => ({
  type: GET_USER,
  uid: uid
});

export const updateUser = user => ({
  type: UPDATE_USER,
  user: user
});

export const updateUserProfilePicture = photoObj => ({
  type: UPDATE_USER_PROFILE_PICTURE,
  photoObj: photoObj
});
