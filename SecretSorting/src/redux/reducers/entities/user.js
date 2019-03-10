import { GET_USER_SUCCEED } from 'actions/user';

const defaultState = {
  entities: {},
  errors: {},
  fetchStatus: {}
};

function addUserEntry(state, action) {
  return {
    ...state,
    entities: {
      ...state.entities,
      [action.user.uid]: { ...action.user }
    },
    fetchStatus: {
      ...state.fetchStatus,
      [action.user.uid]: 'loaded'
    }
  };
}

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_USER_SUCCEED:
      return addUserEntry(state, action);
    // case CREATE_USER_SUCCEED:
    //     return addUserEntry(state, action);
    // case UPDATE_USER_SUCCEED:
    //     return addUserEntry(state, action);
    // case GET_USERS_FROM_SUCCEED:
    //     return addUsersFromSchoolEntry(state, action);
    default:
      return state;
  }
}
