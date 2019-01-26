import * as actionTypes from '../constant/actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  showLoading: false
});

export default (state=defaultState, action) => {
  if (action.type === actionTypes.SHOW_LOADING) {
    return state.set("showLoading", true);
  } else if (action.type === actionTypes.HIDE_LOADING) {
    return state.set("showLoading", false);
  }
  return state;
};