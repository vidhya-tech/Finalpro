// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './App.css'

const root = document.getElementById('root');

const renderApp = () => {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
      <App/>
      </Provider>
    </React.StrictMode>
  );
};

renderApp();
