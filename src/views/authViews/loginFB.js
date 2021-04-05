import React, { useContext } from 'react';
import { signInWithFB } from "../../services/firebase";
import { UserContext } from './providers/UserProvider';
import 'src/css/loginView.css';

function LoginFB() {
  //remove
  const user = useContext(UserContext)
  const [redirect, setredirect] = useState(null)
  //

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