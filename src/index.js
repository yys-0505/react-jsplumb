import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './assets/css/index.css';

// jsplumb
import 'jsplumb/dist/js/jsplumb.js';
import 'jsplumb/css/jsplumbtoolkit-defaults.css';

//jquery ui
import 'jquery-ui-dist/jquery-ui.min'
import 'jquery-ui-dist/jquery-ui.min.css'

//demo
import './assets/css/index.module.scss';
import './assets/css/jsplumb-demo.scss';

const Entrance = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(Entrance, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
