import { GET_SORT_SUCCEED, GET_SORTS_FROM_USER_SUCCEED } from 'actions/sort';

const defaultState = {
  entities: {},
  errors: {},
  fetchStatus: {}
};

function addSortEntry(state, action) {
  return {
    ...state,
    entities: {
      ...state.entities,
      [action.sort.sid]: { ...action.sort }
    },
    fetchStatus: {
      ...state.fetchStatus,
      [action.sort.sid]: 'loaded'
    }
  };
}

function addSortsFromUserEntry(state, action) {
  let nextStep = {};
  action.sorts.forEach(sort => {
    nextStep = {
      ...nextStep,
      entities: {
        ...nextStep.entities,
        [sort.sid]: { ...sort }
      },
      fetchStatus: {
        ...nextStep.fetchStatus,
        [sort.sid]: 'loaded'
      }
    };
  });
  return {
    ...state,
    ...nextStep,
    entities: {
      ...state.entities,
      ...nextStep.entities
    },
    fetchStatus: {
      ...state.fetchStatus,
      ...nextStep.fetchStatus
    }
  };
}

export default function sortReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_SORT_SUCCEED:
      return addSortEntry(state, action);
    case GET_SORTS_FROM_USER_SUCCEED:
      return addSortsFromUserEntry(state, action);
    default:
      return state;
  }
}
