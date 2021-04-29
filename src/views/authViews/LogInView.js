    import React from 'react';
    import "firebase/auth";
    import Modal from '@material-ui/core/Modal';

    import LoginEmail from "./LoginEmail";
    import LoginGoogle from './LoginGoogle.js';
    import LoginFB from "./LoginFB.js"; // disabled until fixed
    import SignUpView from './SignUpEmail.js';
    import "../../css/loginView.css";

  function LogInView() {
  
    
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
      <button onClick={handleOpen}>Log in</button>
      <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
       <div className="login-container">
            <button label="Close" type="button" onClick={handleClose}>X</button>
            <h1> Log in </h1>
            <LoginEmail close={handleClose}/>
            <div className="login-items">
                <LoginGoogle close={handleClose}/>
            </div>
            <SignUpView/>
        </div>
    </Modal>
  </div>
  );
}
export default LogInView;
