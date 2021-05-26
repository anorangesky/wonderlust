import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import "firebase/auth";
import "../../css/loginView.css";

function RegisterWithEmail(props){
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
        try{
            await props.registerWithEmail(form);
        }catch(error){
            alert(error.message)
        }
    }

    let body = (
        <div className="login-container">
            <button label="Close" type="button" onClick={handleClose}>X</button>

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
            <button onClick={handleOpen}>Don't have an account? Click here to sign up </button>
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