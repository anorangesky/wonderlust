import React from 'react';
import "../css/navBar.css";
import "../css/titleView.css";
import LogInView from './authViews/LogInView';
import TitleView from './titleView';
import SettingsView from './settingsView';
import { Link } from "react-router-dom";

import addAttractions from "../images/addAttraction.png";
import map from "../images/homeMap.png";
import notifications from "../images/notifications.png";
import yourAttr from "../images/yourAttr.png";
import settings from "../images/settings.png";



const Navbar = (props) => {

    let navbar = (
        <LogInView/>
    );
    if (props.isUserLoggedIn) {
        navbar = (
           <div className="nav-menu">
            <Link className="nav-link" to='/map' activeStyle>
                <img src={map}/>
            </Link>
            <Link className="nav-link"to='/addAttraction' activeStyle>
                <img src={addAttractions} id="not-implemented"/>
            </Link>
            <Link className="nav-link" to='/yourAttractions' activeStyle>
                <img src={yourAttr}/>
            </Link>
            <Link className="nav-link" to='/notifications' activeStyle>
              <img src={notifications} id="not-implemented"/>
            </Link>
            <Link className="nav-link" to='/settings' activeStyle>
              <img src={settings}/>
            </Link>
          </div>
        )
    }

  return (
    <>
      <div className="nav-container">
        <Link className="header-title" to='/' activeStyle><TitleView/></Link>
        {navbar}      
      </div>
    </>
  );
};
  
export default Navbar;