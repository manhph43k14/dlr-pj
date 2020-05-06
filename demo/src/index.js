import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import appReducers from './reducer/index';
import {Provider} from 'react-redux';

const store = createStore(
    appReducers,
    window._REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
