import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBgnJ7goBKvc3bkmaJERX3BUkKXiDVmT_Y',
  authDomain: 'catch-of-the-day-nngo.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-nngo.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp };

// Default export
export default base;
