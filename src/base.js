import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCy7E5GujH6Puylk6KzlMnD9MMiI7desbA",
  authDomain: "niam0r-catch-of-the-day-new.firebaseapp.com",
  databaseURL: "https://niam0r-catch-of-the-day-new.firebaseio.com"
  // projectId: "niam0r-catch-of-the-day-new",
  // storageBucket: "niam0r-catch-of-the-day-new.appspot.com",
  // messagingSenderId: "647130164941"
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;
