import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAK_D7yZoTC22xZEhKnCVJhnFJ0JlimKk0',
  authDomain: 'e-commerce-cb85d.firebaseapp.com',
  databaseURL: 'https://e-commerce-cb85d.firebaseio.com',
  projectId: 'e-commerce-cb85d',
  storageBucket: 'e-commerce-cb85d.appspot.com',
  messagingSenderId: '96501552447',
  appId: '1:96501552447:web:e00e0b5a08094c2749ef8a',
  measurementId: 'G-FEW8794WGG'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
