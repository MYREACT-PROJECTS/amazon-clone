import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARds5O7cFIxR3kgWuOaOriFmBTonW2lsY",
  authDomain: "clone-46b75.firebaseapp.com",
  databaseURL: "https://clone-46b75.firebaseio.com",
  projectId: "clone-46b75",
  storageBucket: "clone-46b75.appspot.com",
  messagingSenderId: "487223751357",
  appId: "1:487223751357:web:debdcb818c7829ae78bdd4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
