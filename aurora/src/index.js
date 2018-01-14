import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBJMNd2b5TzkYZDIr80fh14csCCXci71LY",
    authDomain: "aurora-dbe5d.firebaseapp.com",
    databaseURL: "https://aurora-dbe5d.firebaseio.com",
    projectId: "aurora-dbe5d",
    storageBucket: "aurora-dbe5d.appspot.com",
    messagingSenderId: "947777917891"
  };
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
