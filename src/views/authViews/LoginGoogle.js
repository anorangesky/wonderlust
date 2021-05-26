import "../../css/loginView.css";

function LoginGoogle(props) {
  return (
      <div className="login-buttons">
        <button className="login-provider-button" onClick={() => {props.signInWithGoogle(); props.close()}}>
        <img src="https://img.icons8.com/plasticine/100/000000/google-logo.png" alt="google icon"/>
        <span> Log in with Google</span>
       </button>
      </div>
  );
}

export default LoginGoogle;
