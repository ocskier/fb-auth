import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { FirebaseAuthProvider } from 'use-firebase-auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './config';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <FirebaseAuthProvider firebase={firebase}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseAuthProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
