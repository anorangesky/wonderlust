
import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { logOut } from "../services/firebase.js";
import logo from '../images/wonderlust.png';


function SettingsView(){
    var user = firebase.auth().currentUser;
  if(user){
  return(
      /* TODO: Restructure the returning class to be divided over profile, 
        setting buttons, and logout button at the end
        */
    <div className="settings">
        <h1> Settings </h1>
        <h2>Hello {user.displayName? user.displayName: user.email}</h2>
        <img className="profile-img" src={user.photoURL? user.photoURL: logo} alt="profile picture"/>
        <button className="logout-button" onClick={() => logOut()}>
            <span> logout</span>
        </button>
        </div>
 )
  }
}

export default SettingsView;