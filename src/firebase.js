import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCqJeNBgN18bXU_5v8TdrC9eLDTyL1LVAU",
    authDomain: "what-s-app-clone-a08b3.firebaseapp.com",
    databaseURL: "https://what-s-app-clone-a08b3.firebaseio.com",
    projectId: "what-s-app-clone-a08b3",
    storageBucket: "what-s-app-clone-a08b3.appspot.com",
    messagingSenderId: "217853774579",
    appId: "1:217853774579:web:39724aeb45f4e496f94586",
    measurementId: "G-67YPR4JMS0"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider =new firebase.auth.GoogleAuthProvider()

export {auth,provider}
export default db;