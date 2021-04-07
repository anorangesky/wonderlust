import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import {registerWithEmail} from "../../services/firebase";
import "firebase/auth";
import "../../css/loginView.css";

function RegisterWithEmail(){
    //Modal code
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    /* CODE TO SIGN UP WITH EMAIL */
    const [form,setForm] = useState({
        email:'',
        password:''
    })
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await registerWithEmail(form);
    }

    const body = (
        <div className="login-container">
            <h1> Sign up</h1>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="email" id="mail" 
                        onChange={(e) => 
                        setForm({...form, email: e.target.value})} />
                <br/>
                <input type="password" placeholder="Password" 
                        onChange={(e) => 
                        setForm({...form, password: e.target.value})}/>
                <br/>
                <button type="submit">Sign up</button>
            </form>
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
export default RegisterWithEmail;