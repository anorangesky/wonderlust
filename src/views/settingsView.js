
import React from 'react';
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { logOut } from "../services/firebase.js";
import logo from '../images/wonderlust.png';
import Modal from '@material-ui/core/Modal';
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
        <img src={user.photoURL? user.photoURL: logo} alt="profile picture"/>
        <h3>Hello {user.displayName? user.displayName: user.email}</h3>
        
        <button disabled> Edit Profile </button>
        <button disabled> Friends </button>
        <button disabled> About WL </button>

        
        <button className = "logOutBtn" onClick={() => {logOut(); routeChange()}}>
            <span> Log Out</span>
        </button>
    </div>
 )
}
export default SettingsView;