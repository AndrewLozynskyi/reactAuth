import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBlsRyKObJfus5e7cr46psasQGVE8iXyAo",
  authDomain: "react-auth-1df7e.firebaseapp.com",
  databaseURL: "https://react-auth-1df7e.firebaseio.com",
  projectId: "react-auth-1df7e",
  storageBucket: "react-auth-1df7e.appspot.com",
  messagingSenderId: "562249025849",
  appId: "1:562249025849:web:ffe728dd5f3996a10840e8"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth