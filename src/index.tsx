import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';

import { store } from './store/store';

import App from './components/app/App';

import './index.css';

// Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyDE30ZK07TH9HnIw8HkvUzw1nP9gEHbyVk',
  authDomain: 'look-and-cook-e12b6.firebaseapp.com',
  projectId: 'look-and-cook-e12b6',
  storageBucket: 'look-and-cook-e12b6.appspot.com',
  messagingSenderId: '355592548247',
  appId: '1:355592548247:web:ed7bffbe0e2d1d34125ed2',
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
