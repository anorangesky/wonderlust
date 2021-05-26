
import React from 'react';
import { useHistory } from "react-router-dom";
import logo from '../images/wonderlust.png';
import "../css/settingsView.css";
import '../css/detailsView.css';


function SettingsView(props){
    var user = props.user;

    const history = useHistory();

    const routeChange = () =>{
        let path = '/map';
        history.push(path);
    }

  return(
    <div className="settings-container">
        <h1> Settings </h1>
        <img id="profileImage" src={user.photoURL? user.photoURL: logo} alt="profile"/>
        <h3>Hello {user.displayName? user.displayName: user.email}</h3>
        <span className="setting-buttons">
            <button id="not-implemented" onClick={() => alert("This feature is not yet available")}> Edit Profile </button>
            <button id="not-implemented" onClick={() => alert("This feature is not yet available")}> Friends </button>
            <button id="not-implemented" onClick={() => alert("This feature is not yet available")}> About </button>
        </span>
        <button className = "logOutBtn" onClick={() => {props.logOut(); routeChange()}}>
             Log Out
        </button>
    </div>
 )
}
export default SettingsView;
