import React from "react";
import { signInWithGoogle } from "../../services/firebase";
function LoginGoogle() {
  const user = useContext(UserContext)
  const [redirect, setredirect] = useState(null)

  return (
      <div className="login-buttons">
        <button className="login-provider-button" onClick={signInWithGoogle}>
        <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
        <span> Log in using with Google</span>
       </button>
      </div>
  );
}
export default LoginGoogle;