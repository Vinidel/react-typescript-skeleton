import { combineReducers } from 'redux';
import user from './uderReducer';
import cleaningHistory from './cleaningHistoryReducer';
import login from './loginReducer';
import { reducer as form } from 'redux-form';
import {routerReducer} from 'react-router-redux'

export default combineReducers({
  user,
  cleaningHistory,
  form,
  login,
  router: routerReducer
})