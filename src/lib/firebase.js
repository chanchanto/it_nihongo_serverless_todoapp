import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCe0aeSHKn_O_-n0C_8BXICf1wKknS581c",
  authDomain: "todo-be4a4.firebaseapp.com",
  projectId: "todo-be4a4",
  storageBucket: "todo-be4a4.appspot.com",
  messagingSenderId: "802318916075",
  appId: "1:802318916075:web:145470434879147bb761ae"
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

