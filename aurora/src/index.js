import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBpDihzMW3V4I6xnBqAKp25ApzaGegWxJY",
    authDomain: "aurora-10876.firebaseapp.com",
    databaseURL: "https://aurora-10876.firebaseio.com",
    projectId: "aurora-10876",
    storageBucket: "aurora-10876.appspot.com",
    messagingSenderId: "974855681516"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
