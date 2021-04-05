import React, { useState } from 'react';
import LoginGoogle from './LoginGoogle.js';
import LoginFB from "./LoginFB.js";
import SignUpView from './SignUpView.js';

import "firebase/auth";
import firebase from "firebase/app";
import "../../css/loginView.css";


function LoginView() {
    // User State used for email log-in
    const [user, setUser] = useState({
        email: '',
        password: '',
        error: '',
    });
    // onChange function
    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
            error: '',
        })
    };

  const logInWithEmail = async() => {
        await firebase.auth().signInWithEmailAndPassword(user.email, user.password).then((res) =>{
          //if user is not yet signed up:
          if(!res.user.emailVerified){
            setUser({
              ...user,
              error: "Please verify your email to continue",
            })
            firebase.auth().signOut();
          }
        }).catch(error => {
          //update error
          setUser({
            ...user,
            error: error.message,
          })
        })
      }
    return (
        <div className="login-container">
            <h1>Log in</h1>
            <form onSubmit={logInWithEmail}>
                <input type="text" placeholder="Email" name="email" onChange={handleChange} /><br />
                <input type="password" placeholder="Password" name="password" onChange={handleChange} /><br />
                <button type="submit">Log in</button>
            </form>
            {user.error && <h4>{user.error}</h4>}
            <div className="alt-login-buttons">
                <LoginFB/>
                <LoginGoogle/>
            </div>
            <SignUpView />
        </div>   
    );
}
export default LoginView;
