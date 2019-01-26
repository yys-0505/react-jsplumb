import { fromJS } from 'immutable'
import * as actionTypes from '../constant/actionTypes'

const defaultState = fromJS({
  tasks: []
});

export default (state=defaultState, action) => {
  switch(action.type){
    case actionTypes.SAVE_TASK:
      return state.set("tasks", action.data);
    default:
      return state;
  }
}