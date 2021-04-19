import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCChcrjUc_4FhvLbsi29ko9TU7sjsisUJ0',
  authDomain: 'react-store-1f595.firebaseapp.com',
  projectId: 'react-store-1f595',
  storageBucket: 'react-store-1f595.appspot.com',
  messagingSenderId: '1008755374157',
  appId: '1:1008755374157:web:aba4518a6fbfa9cef14404'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
