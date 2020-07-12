import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
<<<<<<< HEAD
  apiKey: 'AIzaSyD6mQ4tdffHQ5ltCALQBVrjcFD5d-591WA',
  authDomain: 'catch-of-the-day-nngo-a1768.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-nngo-a1768.firebaseio.com',
=======
  apiKey: 'AIzaSyBgnJ7goBKvc3bkmaJERX3BUkKXiDVmT_Y',
  authDomain: 'catch-of-the-day-nngo.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-nngo.firebaseio.com',
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
});

const base = Rebase.createClass(firebaseApp.database());

<<<<<<< HEAD
// This is a named export
export { firebaseApp };

// This is a default export
=======
// Named export
export { firebaseApp };

// Default export
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
export default base;
