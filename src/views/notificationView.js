import React from 'react';
import "../css/disabled.css";
import logo from '../images/wonderlust.png';



function NotificationView(){
 
  return(
    <div className="disabled-container">
      <h3> Hold out!</h3>
      <h5> You have discovered a feature that is not yet implemented...
      <br/> soon you will be able to see the latest in the Wonderlust world here. </h5>
      <img src={logo}/>
  </div>
  )
}

export default NotificationView;