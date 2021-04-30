import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBJ1aZFDU6KFoepgHvR_WCbq7ysjKRehxY',
  authDomain: 'disney-clone-1fedd.firebaseapp.com',
  projectId: 'disney-clone-1fedd',
  storageBucket: 'disney-clone-1fedd.appspot.com',
  messagingSenderId: '563061548742',
  appId: '1:563061548742:web:c48327fbea58a1381859c7',
  measurementId: 'G-BBVEH2HV29',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
