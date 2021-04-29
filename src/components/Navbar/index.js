import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import firebase from "firebase/app";
import "firebase/auth";
import LoginView from '../../views/authViews/LogInView';

const Navbar = () => {

    var user = firebase.auth().currentUser;
    let navbar = (
      <NavMenu>
      <NavBtnLink to='/login'>
        Log in 
      </NavBtnLink>
      </NavMenu>
    );
    if (user) {
        navbar = (
            <NavMenu>
            <NavLink to='/' activeStyle>
              Home
            </NavLink>
            <NavLink to='/addAttraction' activeStyle>
              Add attraction
            </NavLink>
            <NavLink to='/yourAttractions' activeStyle>
              Your Attractions
            </NavLink>
            <NavLink to='/Notifications' activeStyle>
              Notifications
            </NavLink>
            <NavLink to='/settings' activeStyle>
              Settings
            </NavLink>
          </NavMenu>
        )
    }

  return (
    <>
      <Nav>
        <Bars />
        {navbar}      
      </Nav>
    </>
  );
};
  
export default Navbar;