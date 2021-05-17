import React from 'react';
import "../css/navigationView.css";
import "../css/titleView.css";
import "../css/detailsView.css";
import LogInView from './authViews/LogInView';
import TitleView from './titleView';
// import SettingsView from './settingsView';
import { Link, useLocation } from "react-router-dom";

import addAttractions from "../images/addAttr.png";
import map from "../images/homeMap.png";
import notifications from "../images/notifications.png";
import yourAttr from "../images/yourAttr.png";
import settings from "../images/settings.png";
import AddAttractionView from './addAttractionView';



const Navbar = (props) => {

    let location = useLocation();
    let navbar = (
        <LogInView/>
    );
    if (props.isUserLoggedIn) {
        navbar = (
           <div className="nav-menu">
            <Link className="nav-link" to='/map'>
                <img id="enabled" src={map} alt="map"/>
                {((location.pathname === "/map") || (location.pathname === `/`)) &&<div className="nav-menu-circle"></div>}
            </Link>
            <Link className="nav-link" to='/addAttractions'>
                <img id="disabled2" src={addAttractions} alt="add attraction"/>
                {location.pathname === "/addAttractions" && <div id="disabled-nav"></div>}
            </Link>
            <Link className="nav-link" to='/yourAttractions'>
                <img id="enabled" src={yourAttr} alt="your attractions"/>
                {location.pathname === "/yourAttractions" && <div className="nav-menu-circle"></div>}
            </Link>
            <Link className="nav-link" to='notifications' >
              <img id="disabled2" src={notifications}/>
              {location.pathname === "/notifications" && <div id="disabled-nav"></div>}
            </Link>
            <Link className="nav-link" to='/settings'>
              <img id="enabled" src={settings} alt="settings"/>
              {location.pathname === "/settings" && <div className="nav-menu-circle"></div>}
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
