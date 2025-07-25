import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
import 'antd/dist/antd.css';
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}> 
        <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
