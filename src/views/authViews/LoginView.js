import React, { useContext } from 'react';
import Modal from '@material-ui/core/Modal';
import { UserContext } from 'src/providers/UserProvider.js';

import LoginGoogle from './LoginGoogle.js';
import SignUpView from './SignUpView.js';
import logInWithEmail from "src/services/firebase.js";


function LoginView() {
    //Modal code
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //The user value s available to the components via the useContext hook.
    const user = useContext(UserContext);
    // check the user value and redirect them if they are already logged in
    const [redirect, setredirect] = useState(null)
    useEffect(() => {
        if (user) {
            setredirect('src/views/authViews/LogoutView.js')
        }
    }, [user])
    if (redirect) {
        <Redirect to={redirect} />
    }

    // User State used for email log-in
    const [userMail, setUser] = useState({
        email: '',
        password: '',
        error: '',
    });
    // onChange function
    const handleChange = e => {
        setUser({
            ...userMail,
            [e.target.name]: e.target.value,
            error: '',
        })
    };

    const body = (
        <div>
            <h1>Log in</h1>
            <form onSubmit={logInWithEmail}>
                <input type="text" placeholder="Nickname" name="nickname" onChange={handleChange} /><br />
                <input type="text" placeholder="Email" name="email" onChange={handleChange} /><br />
                <input type="password" placeholder="Password" name="password" onChange={handleChange} /><br />
                <button type="submit">Log in</button>
            </form>
            {userMail.error && <h4>{userMail.error}</h4>}
            <LoginGoogle />
            <SignUpView />
        </div>
    );

    return (
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