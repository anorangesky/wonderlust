/*
// if it doesn't work
§npm cache clean --force
§rm -rf node_modules
§rm -rf node_package-lock.json
§npm install
§npm start 
// if it still doesn't work 
§npm install react-icons --save
§npm i react-icons

Navbar - Footer on Mobile - Header on desktop

    1. user logged out:
        - Show only login button
    2. User logged in:
        - Show settings button
            - Log out button
            - Profile
        - Home button *main map view*
        - Your map button *saved items*
        - Notifications 
*/


import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from '../components/NavbarElements';
import firebase from "firebase/app";
import "firebase/auth";
import LogInView from './authViews/LogInView';
import TitleView from './titleView';
import { Suspense } from 'react';
import SettingsView from './settingsView';

const Navbar = () => {

    var user = firebase.auth().currentUser;
    let navbar = (
        <LogInView/>
    );
    if (user) {
        navbar = (
            <NavMenu>
            <NavLink to='/' activeStyle>
              Map
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
              <SettingsView/>
            </NavLink>
          </NavMenu>
        )
    }

  return (
    <>
      <Nav>
        <Bars/>
        <NavLink to='/' activeStyle><TitleView/></NavLink>
        {navbar}      
      </Nav>
    </>
  );
};
  
export default Navbar;