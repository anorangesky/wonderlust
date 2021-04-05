    import React, { useEffect, useContext, useState } from 'react';
    import { useUser } from 'reactfire';
    import Modal from '@material-ui/core/Modal';

    import LogoutView from "./LogoutView";
    import LoginView from "./LoginView";
    
  function ProfileView() {
      //Modal code:
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // get the current user
    const user = useUser();
    const loggedInView = (
        <div className="login-container">
            <h1>Hello {user.displayName}</h1>
            <LogoutView/>
        </div>
    );
    const loggedOutView = (
        <div className="login-container">
            <h1>Hello</h1>s
            <LoginView/>

        </div>
    );
    //Show different body if the user is logged in or not
    let body = loggedOutView;
    if (user){
        body = loggedInView;
    }

  return(
   <div>
      <button type="button" onClick={handleOpen}> Authhh </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body};
      </Modal>
    </div>
  );
}

export default ProfileView;

