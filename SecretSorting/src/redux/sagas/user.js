import { call, put, takeEvery } from 'redux-saga/effects';
import {
  UPDATE_USER_PROFILE_PICTURE,
  UPDATE_USER_PROFILE_PICTURE_SUCCEED,
  UPDATE_USER_PROFILE_PICTURE_ERROR
} from 'actions/user';
import { updateUserProfilePicture } from 'services/users';

function* fetchUpdateUserProfilePicture(action) {
  try {
    const user = yield call(updateUserProfilePicture, action.photoObj);
    yield put({ type: UPDATE_USER_PROFILE_PICTURE_SUCCEED, user });
  } catch (e) {
    yield put({ type: UPDATE_USER_PROFILE_PICTURE_ERROR, message: 'Exception ' + e.message });
  }
}

export const userSagas = [takeEvery(UPDATE_USER_PROFILE_PICTURE, fetchUpdateUserProfilePicture)];

export default userSagas;
