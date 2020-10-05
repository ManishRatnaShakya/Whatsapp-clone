import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCvb_AhaGtPj5W-OiOQInhHU76WtLfx_rc",
  authDomain: "whatsapp-mern-f3d9d.firebaseapp.com",
  databaseURL: "https://whatsapp-mern-f3d9d.firebaseio.com",
  projectId: "whatsapp-mern-f3d9d",
  storageBucket: "whatsapp-mern-f3d9d.appspot.com",
  messagingSenderId: "163788724349",
  appId: "1:163788724349:web:3d8cae69c1fd2a76e3f914"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;