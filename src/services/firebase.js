
//import firebase authentication
import firebase from "firebase/app";
import "firebase/auth";
//import and configure dotenv
import dotenv from 'dotenv'
dotenv.config()

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider()
/** LOG IN function for GOOGLE that uses 'signInWithPopup()' method **/
export const signInWithGoogle = async() => {
  await auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}

const facebookProvider = new firebase.auth.FacebookAuthProvider();
/** LOG IN function for FB */
export const signInWithFB = async() =>{
  await auth.signInWithPopup(facebookProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}


/** SIGN UP  function with email **/
export const signUpWithEmail = async() => {
  e.preventDefault();
  await auth.createUserWithEmailAndPassword(user.email, user.password).then((res) =>{
      res.user.updateProfile({
        displayName: user.nickname,
      });
      // URL of website. 
      const myURL = { url: 'http://localhost:3000/' }; //TODO: update this when we are hosing it 
      // Send Email Verification and redirect to my website.
      result.user.sendEmailVerification(myURL).then(() => {
          setUser({
            ...user,
            verifyEmail: `Welcome ${user.nickname}. To continue please verify your email.`,
        })
        auth.signOut();
    }).catch(error => {
      setUser({
        ...user,
        error: error.message,
      })
    })
  })
}

/** LOG IN function with email **/
export const logInWithEmail = async() => {
  e.preventDefault();
  await auth.signInWithEmailAndPassword(user.email, user.password).then((res) => {
    //if user is not yet signed up:
    if(!res.user.emailVerified){
      setUser({
        ...user,
        error: "Please verify your email to continue",
      })
      auth.signOut();
    }
  }).catch(error => {
    //update error
    setUser({
      ...user,
      error: error.message,
    })
  })
}


/** signout function **/
export const logOut = () => {
  auth.signOut().then(()=> {
    console.log('logged out')
  }).catch((error) => {
    console.log(error.message)
  })
}