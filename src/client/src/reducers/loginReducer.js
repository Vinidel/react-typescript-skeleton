const initialState = {
  fetching: false,
  fetched: false,
  session: {},
  user: {},
  error: null
};

export default function(state = initialState, action) {
  console.log('Login reducer executed');
  switch (action.type) {
    case 'DO_LOGIN_FETCHING':
      return Object.assign({}, state, {
        fetching: true
      });
    case 'DO_LOGIN_FULFILLED':
      return Object.assign({}, state, {
        fetched: true,
        fetching: false,
        session: action.payload.session,
        user: action.payload.user
      });
    case 'DO_LOGIN_REJECTED':
      return Object.assign({}, state, {
        fetched: true,
        fetching: false,
        error: action.err.response.data
      });
    case 'DO_LOGOUT_FULFILLED':
      return state;
    default:
      return state;
  }
}
