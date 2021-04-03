import React, { useEffect, useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { logOut } from "./services/firebase";
import { UserContext } from "./providers/UserProvider";

function LogoutView(){
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body =(
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