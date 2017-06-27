const initialState = {
  fetching: false,
  fetched: false,
  history: [],
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_CLEANING_HISTORY_PENDING':
      return Object.assign({}, state, {
        fetching: true
      });
    case 'FETCH_CLEANING_HISTORY_FULFILLED':
      return Object.assign({}, state,
        {
          fetched: true,
          fetching: false,
          history: action.payload
        });
    case 'FETCH_CLEANING_HISTORY_REJECTED':
      return Object.assign({}, state,
        {
          fetched: true,
          fetching: false,
          error: action.payload
        });
    default:
      return state;
  }
}
