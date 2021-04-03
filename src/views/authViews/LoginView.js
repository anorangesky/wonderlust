import React from 'react';
import Modal from '@material-ui/core/Modal';
import LoginGoogle from './LoginGoogle.js';
import SignUpView from './signUpView.js';
import logInWithEmail from "../../services/firebase";


function LoginView(){
    //Modal code
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // User State
    const [user, setUser] = useState({
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
            <h1>Log in</h1>
            <form onSubmit={logInWithEmail}>
                <input type="text" placeholder="Nickname" name="nickname" onChange={handleChange}/><br />
                <input type="text" placeholder="Email" name="email" onChange={handleChange}/><br />
                <input type="password" placeholder="Password" name="password" onChange={handleChange}/><br />
                <button type="submit">Log in</button>
            </form>
            {user.error && <h4>{user.error}</h4>}
            <LoginGoogle/>
            <SignUpView/>
        </div>
    );

    return(
        <div>
            <button type="button" onClick={handleOpen}> Open Log in card </button>
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
export default LoginView;