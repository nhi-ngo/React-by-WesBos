import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD6mQ4tdffHQ5ltCALQBVrjcFD5d-591WA',
  authDomain: 'catch-of-the-day-nngo-a1768.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-nngo-a1768.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
