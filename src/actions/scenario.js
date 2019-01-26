import * as actionTypes from '../constant/actionTypes';
import http from '../common/js/http'

export const saveTaskAction = (data) => {
  return {
    type: actionTypes.SAVE_TASK,
    data
  }
};

export const getTask = () => {
  return (dispatch) => {
    http.get("/data/taskList.json").then(res => {
      const action = saveTaskAction(res);
      dispatch(action);
    });
  }
};