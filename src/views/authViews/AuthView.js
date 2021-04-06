    import React from 'react';
    import firebase from "firebase/app";
    import "firebase/auth";
    import Modal from '@material-ui/core/Modal';

    import { logOut } from "../../services/firebase.js";
    import LoginEmail from "./LoginEmail";
    import LoginGoogle from './LoginGoogle.js';
    import LoginFB from "./LoginFB.js"; // disabled until fixed
    import SignUpView from './SignUpEmail.js';
    import "../../css/loginView.css";
    import logo from '../../images/wonderlust.png';
    
  function AuthView() {
      //Modal code:
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    // Get the current user -  is "null" if logged out
    var user = firebase.auth().currentUser;

    //  TODO: <LoginFB/> check src/services/firebase.js 65:70 for instruction in how to 
    //  TODO: close the modal after a successful event of 'log in' or 'log out'
    //Show different body if the user is logged in or not
    let body = (
        <div className="login-container">
            <button label="Close" type="button" onClick={handleClose}>X</button>
            <h1> Log in </h1>
            <LoginEmail/>
            <div className="login-items">
                <LoginGoogle/>
            </div>
            <SignUpView/>
        </div>
    );
    if (user){
        body = (
            <div className="login-container">
                <button label="Close" type="button" onClick={handleClose}>X</button>
                <h1>Hello {user.displayName? user.displayName: user.email}</h1>
                <img className="profile-img" src={user.photoURL? user.photoURL: logo} alt="profile picture"/>
                <button className="logout-button" onClick={logOut}>
                <span> logout</span>
                </button>
            </div>
            );
    }

  return(
  <div>
    <button type="button" onClick={handleOpen}> User Auth: Logged {user? "in":"out"}</button>
    <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
       {body}
    </Modal>
</div>
  );
}
export default AuthView;

