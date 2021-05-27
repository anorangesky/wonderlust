import { signInWithFB } from "../../services/firebase";
import "../../css/loginView.css";

/* This component is currently not being used */

function LoginFB() {
  return (
      <div className="login-buttons">
        <button className="login-provider-button" onClick={signInWithFB}>
        <img src="https://img.icons8.com/android/48/000000/facebook-new.png" alt="FB icon"/>
        <span> Log in with Facebook</span>
       </button>
      </div>
  );
}
export default LoginFB;
