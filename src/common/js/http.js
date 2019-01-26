import axios from 'axios';
import { showError } from './utils';
import store from '../../store';
import { getShowLoadingAction, getHideLoadingAction } from '../../actions/page'

axios.defaults = {
  timeout: 30000,
  withCredentials: true
};
let baseUrl = "http://localhost:3000";
axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

let http = {};
http.get = (path, params) => {
  return new Promise((resolve, reject) => {
    store.dispatch(getShowLoadingAction());
    axios.get(path, {params}).then(res => {
      store.dispatch(getHideLoadingAction());
      if (res.status === 200) {
        resolve(res.data)
      } else {
        showError(res.statusText);
        reject(res)
      }
    }).catch(err => {
      store.dispatch(getHideLoadingAction());
      showError(err.response.statusText);
      reject(err);
    })
  })
};
http.post = async (path, data) => {
  try {
    let url = baseUrl;
    if (path) {
      url = baseUrl + path;
    }
    let res = await axios.post(path, JSON.stringify(data))
    res = res.data
    return new Promise((resolve, reject) => {
      if (res.code === 0) {
        resolve(res)
      } else {
        reject(res)
      }
    })
  } catch (err) {
    // return (e.message)
    alert('服务器出错')
    console.log(err)
  }
};

export default http;