import React from "react";

import "../../css/loginView.css";

import { logOut } from "../../services/firebase.js";

function LogoutView() {
  return (
    <div className="login-container">
        <button className="logout-button" onClick={logOut}>
        <span> logout</span>
        </button>
    </div>
  );
}

export default LogoutView;
