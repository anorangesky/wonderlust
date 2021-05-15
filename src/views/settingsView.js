
import React from 'react';
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { logOut } from "../services/firebase.js";
import logo from '../images/wonderlust.png';
import "../css/settingsView.css";
import '../css/detailsView.css';


function SettingsView(){
    var user = firebase.auth().currentUser;

    const history = useHistory();

    const routeChange = () =>{
        let path = '/map';
        history.push(path);
    }

    function triggerPopup() {
        const popup = document.getElementById("myPopupDisabled");
        popup.classList.toggle("show");
      }

  return(
    <div className="settings-container">
        <h1> Settings </h1>
        <img src={user.photoURL? user.photoURL: logo} alt="profile"/>
        <h3>Hello {user.displayName? user.displayName: user.email}</h3>
        <span className="popup">
            <span className="popuptext" id="myPopupDisabled">This feature is not yet available</span>
            <button id="not-implemented" onClick={e => triggerPopup()}> Edit Profile </button>
            <button id="not-implemented" onClick={e => triggerPopup()}> Friends </button>
            <button id="not-implemented" onClick={e => triggerPopup()}> About </button>
        </span>
        <button className = "logOutBtn" onClick={() => {logOut(); routeChange()}}>
             Log Out
        </button>      
    </div>
 )
}
export default SettingsView;
