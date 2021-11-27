import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBYdm-3YCZoNQn2WCSoRkXC_hpf7ewrItk",
  authDomain: "project-film-b58ff.firebaseapp.com",
  projectId: "project-film-b58ff",
  storageBucket: "project-film-b58ff.appspot.com",
  messagingSenderId: "219777321220",
  appId: "1:219777321220:web:82f6b51ee0c79ffcef2851"
};


const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };




// const firebaseConfig = {
//   apiKey: "AIzaSyBYdm-3YCZoNQn2WCSoRkXC_hpf7ewrItk",
//   authDomain: "project-film-b58ff.firebaseapp.com",
//   projectId: "project-film-b58ff",
//   storageBucket: "project-film-b58ff.appspot.com",
//   messagingSenderId: "219777321220",
//   appId: "1:219777321220:web:82f6b51ee0c79ffcef2851"
// };
