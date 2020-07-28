import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyC3z1cPJ7S-sHjsxUuDSFvHGftyZgvZECA',
  authDomain: 'ayninfotech-942f7.firebaseapp.com',
  databaseURL: 'https://ayninfotech-942f7.firebaseio.com',
  projectId: 'ayninfotech-942f7',
  storageBucket: 'ayninfotech-942f7.appspot.com',
  messagingSenderId: '506053969942',
  appId: '1:506053969942:web:3c6bc0fc8a66d76a94cd37',
  measurementId: 'G-M8PQK87L3N',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()
export { storage, firebase as default }
