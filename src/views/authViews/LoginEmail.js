import React, { useState } from 'react';
import {signInWithEmail} from "../../services/firebase";
import "../../css/loginView.css";

function LoginEmail(props) {
  const [form,setForm] = useState({
    email:'',
    password:''
  })
  const handleSubmit = async(e)=>{
    e.preventDefault();
    await signInWithEmail(form);
    props.close();
  }
    return (
        <>
          <form onSubmit={handleSubmit} >
            <input type="text" placeholder="email" id="mail"
                onChange={(e)=>setForm({...form, email: e.target.value})}
            />
            <br/>
            <input type="password"  placeholder="Password"
                  onChange={(e) => setForm({...form, password: e.target.value})}
            />
            <br/>
            <button type="submit"> Login </button>
          </form>
        </>
    );
}
export default LoginEmail;
