import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js';

const firebaseConfig = {
  apiKey: "AIzaSyAXB-vMClPjwWq7dtc3wgoO6sAsUIqrCAs",
  authDomain: "keshavindustiresweb.firebaseapp.com",
  projectId: "keshavindustiresweb",
  storageBucket: "keshavindustiresweb.appspot.com",
  messagingSenderId: "642172093744",
  appId: "1:642172093744:web:c85192443296e684a3b4f5",
  measurementId: "G-ML2C6L7F5Q"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase();
export { firebaseApp, auth, database };