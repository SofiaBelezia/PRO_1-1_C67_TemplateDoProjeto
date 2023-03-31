import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
 apiKey: "AIzaSyB91mg65uyk-kTZhO_ROhBiWb7vDDoVyQs",
  authDomain: "team-voting-b6b01.firebaseapp.com",
  databaseURL: "https://team-voting-b6b01-default-rtdb.firebaseio.com",
  projectId: "team-voting-b6b01",
  storageBucket: "team-voting-b6b01.appspot.com",
  messagingSenderId: "43885882242",
  appId: "1:43885882242:web:28c7e43530e46e0da77d9b"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
