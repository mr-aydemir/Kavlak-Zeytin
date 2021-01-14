import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'

if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyAOFxB6pk65ZLT-qP3e--ztXoJH5AFLa_E",
        authDomain: "testsite-anonymous.firebaseapp.com",
        databaseURL: "https://testsite-anonymous-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "testsite-anonymous",
        storageBucket: "testsite-anonymous.appspot.com",
        messagingSenderId: "219450514214",
        appId: "1:219450514214:web:3e710f737ea4842c4affe7"
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({ timestampsInSnapshots: true })
}
const fireDb = firebase.firestore()
const realDb = firebase.database()
const auth = firebase.auth()
export { fireDb, realDb, auth }