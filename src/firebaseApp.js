import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBKfUivY6JTSVFK5Ys36iR6FxQJ7rRfUIM",
  authDomain: "turnout-373e8.firebaseapp.com",
  databaseURL: "https://turnout-373e8.firebaseio.com",
  projectId: "turnout-373e8",
  storageBucket: "turnout-373e8.appspot.com",
  messagingSenderId: "24796834950",
  appId: "1:24796834950:web:3d892346a1d73b0683f507",
  measurementId: "G-FR1Z4DQHS7"
}

export const firebaseApp  = firebase.initializeApp(firebaseConfig)
export const eventsRef = firebaseApp.database().ref().child('events')