import React, { useState } from 'react';
import "../../css/loginView.css";

function LoginEmail(props) {
  const [form,setForm] = useState({
    email:'',
    password:''
  })
  const handleSubmit = async(e)=>{
    e.preventDefault();
    await props.signInWithEmail(form);
    if(props.isUserLoggedIn){
      props.close();
    }   
  }
    return (
        <>
          <form onSubmit={(e) => {handleSubmit(e)}} >
            <input type="text" placeholder="email" id="mail"
                onChange={(e)=>setForm({...form, email: e.target.value})}
            />
            <br/>
            <input type="password"  placeholder="password"
                  onChange={(e) => setForm({...form, password: e.target.value})}
            />
            <br/>
            <button type="submit"> Login </button>
          </form>
        </>
    );
}
export default LoginEmail;
