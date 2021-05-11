
//import firebase authentication
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database"
import {setIsUserLoggedIn, setUserId} from "../redux/slices/userState";
import store from "../redux/store";
//import and configure dotenv
import dotenv from 'dotenv'
dotenv.config()



//This should not be here i assume but it's a workaround for now..
const firebaseConfig ={
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);
export default firebaseConfig;
export const auth = firebase.auth();
// var database = firebase.database();

const googleProvider = new firebase.auth.GoogleAuthProvider()
/** LOG IN function for GOOGLE that uses 'signInWithPopup()' method **/
export const signInWithGoogle = async() => {
  await firebase.auth().signInWithPopup(googleProvider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // console.log(user);
    onLoginSuccess(user)
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  })
}

/*
TODO:
Facebook enforces HTTPS and does not allow login with insecure hosts. When using Facebook in development
mode with an http://localhost origin, you need to ensure that development mode is turned on for this
Facebook App. In addition, sign-in will only be allowed with Facebook test accounts.

To turn it on Before switching to live mode, you must provide both a valid Privacy Policy URL and
data deletion information. https://developers.facebook.com/apps/1633620866825312/settings/basic/

*/
/* LOG IN function for FB */
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const signInWithFB = async() =>{
  await firebase.auth().signInWithPopup(facebookProvider).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;
    onLoginSuccess(user)
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
  })
}


/** SIGN UP  function with email **/
export const registerWithEmail = async({email, password})=>{
  const resp = await firebase.auth()
    .createUserWithEmailAndPassword(email, password);
    console.log(resp.user)
    onLoginSuccess(resp.user)
  return resp.user;
}
/** LOGIN function with email **/
export const signInWithEmail = async({email, password})=>{
  const resp = await firebase.auth()
    .signInWithEmailAndPassword(email, password);
    store.dispatch(setIsUserLoggedIn(true));
    store.dispatch(setUserId(resp.user));
  return resp.user;
}

/** signout function **/
export const logOut = () => {
  firebase.auth().signOut().then(()=> {
    console.log('logged out')
    store.dispatch(setIsUserLoggedIn(false));
    store.dispatch(setUserId(null));
  }).catch((error) => {
    console.log(error.message)
  })
}

function onLoginSuccess(user) {
  store.dispatch(setIsUserLoggedIn(true));
  store.dispatch(setUserId(user));
  firebase.database().ref("/users/" + user.uid).once('value').then((snapshot) => {
    // Check if user exists in database, otherwise add them
    if(!snapshot.key) {
      writeNewUser(user.uid, user.displayName ? user.displayName: user.email);
    }
  }).catch((error) => {
    console.log(error);
  });
}

export const writeUserAttraction = (uid, attraction) => {
  firebase.database().ref('users/' + uid).set({attraction});
}

export const writeNewUser = (uid, name) => {
  firebase.database().ref('/users/').update(
    {
      [uid]: {
        username: name,
      }
    });
}
