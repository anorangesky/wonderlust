import React from 'react';
import Modal from '@material-ui/core/Modal';
import LoginGoogle from './LoginGoogle.js';
import signUpWithEmail from "src/services/firebase.js";

function SignUpView(){
    //Modal code
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

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
    
    const body = (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={signUpWithEmail}>
                <input type="text" placeholder="Nickname" name="nickname" onChange={handleChange}/><br />
                <input type="text" placeholder="Email" name="email" onChange={handleChange}/><br />
                <input type="password" placeholder="Password" name="password" onChange={handleChange}/><br />
                <button type="submit">Sign Up</button>
            </form>
            {user.error && <h4>{user.error}</h4>}
            <LoginGoogle/>
        </div>
    );

    return(
        <div>
            <p onClick={handleOpen}> Don't have an account? Sign up </p>
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