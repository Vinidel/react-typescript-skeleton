import axios from 'axios';
import {hashHistory} from 'react-router';
// import cookie from 'cookies-js';
import cookie from 'js-cookie';

const URL = 'http://localhost:3000';

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function cleaningHistory() {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_CLEANING_HISTORY',
    });

    return fetchCleaningHistory()
      .then(data => {
        dispatch({
          type: 'FETCH_CLEANING_HISTORY_FULFILLED',
          payload: data.data
        });
      })
  }
}

export function fetchCleaningHistory() {
  return axios.get(`${URL}/apartments/1/history`)
}

export function callLogout() {
  const token = cookie.get('token');
  const options = {token};
  return axios.post(`${URL}/logout`, options);
}

export function logout() {
  const token = cookie.get('token');
  return function(dispatch) {
    console.log(cookie);
    cookie.remove('token');
    callLogout()
      .then((data) => {
        dispatch({
          type: 'DO_LOGOUT_FULFILLED',
          payload: data
        });
        hashHistory.push('/login');
      })
      .catch((data) => {
        dispatch({
          type: 'DO_LOGOUT_FULFILLED',
          payload: data
        });
        hashHistory.push('/login');
      })
  }
}

function callLogin(options) {
  return axios.post(`${URL}/login`, options);
}

export function doLogin(options) {
  return function(dispatch) {
    dispatch({
      type: 'DO_LOGIN_FETCHING',
    });

    return callLogin(options)
      .then(data => {
        cookie.set('token', data.data.session.token);
        dispatch({
          type: 'DO_LOGIN_FULFILLED',
          payload: data.data
        })
      })
      .then(() => hashHistory.push('/cleaning'))
      .catch(err => dispatch({type: 'DO_LOGIN_REJECTED', err}))
  }
}

