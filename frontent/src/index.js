import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './Styles/animations.css';
import './Styles/root.css';
import { Provider } from 'react-redux';
import App from './App';
import { fpStore } from './Store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={fpStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
