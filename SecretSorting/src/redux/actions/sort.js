export const GET_SORT = 'GET_SORT';
export const GET_SORT_SUCCEED = 'GET_SORT_SUCCEED';
export const GET_SORT_ERROR = 'GET_SORT_ERROR';

export const GET_SORTS_FROM_USER = 'GET_SORTS_FROM_USER';
export const GET_SORTS_FROM_USER_SUCCEED = 'GET_SORTS_FROM_USER_SUCCEED';
export const GET_SORTS_FROM_USER_ERROR = 'GET_SORTS_FROM_USER_ERROR';

export const CREATE_SORT = 'CREATE_SORT';
export const CREATE_SORT_SUCCEED = 'CREATE_SORT_SUCCEED';
export const CREATE_SORT_ERROR = 'CREATE_SORT_ERROR';

export const DELETE_SORT = 'DELETE_SORT';
export const DELETE_SORT_SUCCEED = 'DELETE_SORT_SUCCEED';
export const DELETE_SORT_ERROR = 'DELETE_SORT_ERROR';

export const UPDATE_SORT = 'UPDATE_SORT';
export const UPDATE_SORT_SUCCEED = 'UPDATE_SORT_SUCCEED';
export const UPDATE_SORT_ERROR = 'UPDATE_SORT_ERROR';

export const getSort = sid => ({
  type: GET_SORT,
  sid: sid
});

export const getSortsFromUser = uid => ({
  type: GET_SORTS_FROM_USER,
  uid: uid
});

export const createSort = () => ({
  type: CREATE_SORT
});

export const deleteSort = sid => ({
  type: DELETE_SORT,
  sid: sid
});

export const updateSort = sort => ({
  type: UPDATE_SORT,
  sort: sort
});
