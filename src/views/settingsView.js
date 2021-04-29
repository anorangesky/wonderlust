
import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { logOut } from "../services/firebase.js";
import logo from '../images/wonderlust.png';
import Modal from '@material-ui/core/Modal';
import "../css/loginView.css";

function SettingsView(){
    //Modal code:
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    var user = firebase.auth().currentUser;

  return(
     <>
    <p onClick={handleOpen}>Settings</p>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
    >
    <div className="login-container">
        <h1> Settings </h1>
        <h2>Hello {user.displayName? user.displayName: user.email}</h2>
        <img className="profile-img" src={user.photoURL? user.photoURL: logo} alt="profile picture"/>
        <button className="logout-button" onClick={() => {logOut(); handleClose()}}>
            <span> logout</span>
        </button>
        </div>
    </Modal>
    </>
 )
}
export default SettingsView;