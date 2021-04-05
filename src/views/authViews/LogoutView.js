import React, { useEffect, useContext, useState } from "react";
import Modal from '@material-ui/core/Modal';

import { Redirect } from "react-router-dom";
import { logOut } from "./services/firebase";
import { UserContext } from "./providers/UserProvider";

function LogoutView() {
  //Modal code:
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //Get the user value for the components via the useContext hook
  const userAuth = useContext(UserContext);
  // check user value and redirect them if they are already logged out
  const [redirect, setredirect] = useState(null)
  useEffect(() => {
      if (!userAuth) {
          setredirect('src/views/authViews/LoginView.js')
      }
  }, [userAuth])
  if (redirect) {
      <Redirect to={redirect} />
  }

  const body = (
    <div>
      <button className="logout-button" onClick={logOut}>
        <span> logout</span>
      </button>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}> Open LogOut card </button>
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

export default LogoutView;