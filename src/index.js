import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store';
import './index.css';
import 'rsuite/dist/styles/rsuite-default.css';
import App from './App';
ReactDOM.render(
  <Provider store={configureStore()}>
      <App />
  </Provider>,
  document.getElementById('root')
);
