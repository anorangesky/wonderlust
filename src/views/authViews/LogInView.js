    import React from 'react';
    import "firebase/auth";
    import Modal from '@material-ui/core/Modal';
    import SignUpView from './SignUpEmail.js';
    import LoginEmail from './LoginEmail';
    import LoginGoogle from './LoginGoogle';
    import "../../css/loginView.css";

  function LogInView(props) {
      //Modal code:
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

  return(
  <div>
      <button className ="opnModalBtn"onClick={handleOpen}>Log in</button>
      <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
       <div className="login-container">
            <button label="Close" type="button" onClick={handleClose}>X</button>
            <h1> Log in </h1>
            <LoginEmail signInWithEmail = {(form) => props.signInWithEmail(form)} close={handleClose} isUserLoggedIn = {props.isUserLoggedIn}/>
            <div className="login-items">
                <LoginGoogle signInWithGoogle = {() => props.signInWithGoogle()} close={handleClose}/>
            </div>
            <SignUpView registerWithEmail ={(form) => props.registerWithEmail(form)}/>
        </div>
    </Modal>
  </div>
  );
}
export default LogInView;
