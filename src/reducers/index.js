import { combineReducers } from 'redux-immutable';
import pageReducer from './page'
import scenarioReducer from './scenario'

export default combineReducers({
  page: pageReducer,
  scenario: scenarioReducer
});