import React, {useState, useEffect,  createContext} from "react";
import { auth } from "../services/firebase"

//store user value as context and pass the init value (null) to it
export const UserContext = createContext({user: null})
//keeps track of the user status using 'onAuthStateChange' (from firebase.auth())
// to use the provider, the components using it needs to be wrapped in it (app.js)
export default (props) => {
  const [user, setuser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
        //once the user is signed in, the state is updated with their name and email      if(user){
      if(user){
        const { displayName, email } = user;
        setuser({
          displayName,
          email,
        });
      }
    });
  }, []);
  //returns the userContext provider with the user value
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};