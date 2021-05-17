import React from 'react';
import Modal from '@material-ui/core/Modal';
import YourAttractionsDetailsView from "./yourAttractionDetailsView";
import {removeSavedAttraction} from "../services/firebase";
import logo from '../images/wonderlust.png';
import remove from "../images/remove.png";
import "../css/yourAttractionsView.css";
import '../css/detailsView.css';


function YourAttractionsView(props){
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  function triggerPopup() {
    const popup2 = document.getElementById("myPopupDisabled");
    popup2.classList.toggle("show");
  }

  return(
      <div>
        <h1> Your saved attractions </h1>
        <div className="yourSaved-container">
        <ul className="list-container">
          {props.savedAttractions.map(attraction =>
            <li className="list-item" key={attraction.pageid} >
                  <img id="list-image"
                      src={attraction.thumbnail ? attraction.thumbnail.source : logo}
                      alt={attraction.pageimage ? attraction.pageimage : "Wonderlust logo"}
                  />
                  <div id="openDetails"onClick={e => {props.getArticle(attraction.pageid); handleOpen()}}>
                    <p id="list-title"> {attraction.title} </p>
                  </div>
                  <div id="list-buttons">
                      <button id="disabled3"> Share </button>
                    <img id="list-trash"src={remove} onClick={e => removeSavedAttraction(attraction.pageid)}/>

                  </div>
            </li>
            )}
        </ul>
        <div className="yourMapView">
          <div className="disabled-container">
              <h3> Hold out!</h3>
              <h5> You have discovered a feature that is not yet implemented...
              <br/> soon you will be able to see your saved attractions on a map here. </h5>
              <img src={logo}/>
          </div>
        </div>
        </div>
        </div>
  )
}

export default YourAttractionsView;
