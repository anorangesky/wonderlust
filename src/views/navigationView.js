import React from 'react';
import "../css/navBar.css";
import "../css/titleView.css";
import LogInView from './authViews/LogInView';
import TitleView from './titleView';
// import SettingsView from './settingsView';
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
            <Link className="nav-link" to='/map'>
                <img src={map} alt="map"/>
            </Link>
            <Link className="nav-link"to='/addAttraction'>
                <img src={addAttractions} id="not-implemented" alt="add attraction"/>
            </Link>
            <Link className="nav-link" to='/yourAttractions'>
                <img src={yourAttr} alt="your attractions"/>
            </Link>
            <Link className="nav-link" to='/notifications'>
              <img src={notifications} id="not-implemented" alt="notifications"/>
            </Link>
            <Link className="nav-link" to='/settings'>
              <img src={settings} alt="settings"/>
            </Link>
          </div>
        )
    }

  return (
    <>
      <div className="nav-container">
        <Link className="header-title" to='/'><TitleView/></Link>
        {navbar}
      </div>
    </>
  );
};

export default Navbar;
