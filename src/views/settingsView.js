
import React from 'react';
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { logOut } from "../services/firebase.js";
import logo from '../images/wonderlust.png';
import "../css/settingsView.css";

function SettingsView(){
    var user = firebase.auth().currentUser;

    const history = useHistory();

    const routeChange = () =>{
        let path = '/map';
        history.push(path);
    }

  return(
    <div className="settings-container">
        <h1> Settings </h1>
        <img src={user.photoURL? user.photoURL: logo} alt="profile"/>
        <h3>Hello {user.displayName? user.displayName: user.email}</h3>

        <button disabled id="not-implemented"> Edit Profile </button>
        <button disabled id="not-implemented"> Friends </button>
        <button disabled id="not-implemented"> About Wonderlust </button>


        <button className = "logOutBtn" onClick={() => {logOut(); routeChange()}}>
            <span> Log Out</span>
        </button>
    </div>
 )
}
export default SettingsView;
