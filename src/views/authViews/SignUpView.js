import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
//import { signUpWithEmail } from "src/services/firebase.js";
import "firebase/auth";
import firebase from "firebase/app";
import "../../css/loginView.css";
import LoginGoogle from './LoginGoogle.js';
import LoginFB from "./LoginFB.js";


function SignUpView(){
    //Modal code
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    /* CODE TO SIGN UP WITH EMAIL */
    //User state
    const [user, setUser] = useState({
        nickname: '',
        email: '',
        password: '',
        error: '',
      });
    // onChange function
    const handleChange = e => {
        setUser({
        ...user,
        [e.target.name]: e.target.value,
        error: '',
        })
    };

    const signUpWithEmail = async() => {
        await firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then((res) =>{
            res.user.updateProfile({
              displayName: user.nickname,
            });
            // URL of website. 
            const myURL = { url: 'http://localhost:3000/' }; //TODO: update this when we are hosing it 
            // Send Email Verification and redirect to my website.
            res.user.sendEmailVerification(myURL).then(() => {
                setUser({
                  ...user,
                  verifyEmail: `Welcome ${user.nickname}. To continue please verify your email.`,
              })
              firebase.auth().signOut();
          }).catch(error => {
            setUser({
              ...user,
              error: error.message,
            })
          })
        })
      }
    
    
    const body = (
        <div className="login-container">
            <h1>Sign up</h1>
            <form onSubmit={signUpWithEmail}>
                <input type="text" placeholder="Nickname" name="nickname" onChange={handleChange}/><br />
                <input type="text" placeholder="Email" name="email" onChange={handleChange}/><br />
                <input type="password" placeholder="Password" name="password" onChange={handleChange}/><br />
                <button type="submit">Sign Up</button>
            </form>
            {user.error && <h4>{user.error}</h4>}

            <div className="alt-login-buttons">
                <LoginFB/>
                <LoginGoogle/>
            </div>
        </div>
    );

    return(
        <div>
            <p onClick={handleOpen}> Don't have an account? Click here to sign up </p>
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
export default SignUpView;