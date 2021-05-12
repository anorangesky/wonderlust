import React from 'react';
import Modal from '@material-ui/core/Modal';
import YourAttractionsDetailsView from "./yourAttractionDetailsView";
import {removeSavedAttraction} from "../services/firebase";
import logo from '../images/wonderlust.png';
import remove from "../images/remove.png";
import "../css/yourAttractionsView.css";


function YourAttractionsView(props){
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  return(
      <div>
        <h1> Your saved attractions </h1>
        <div className="container">
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
                    <button id="list-share"> Share </button>
                    <img id="list-trash"src={remove} onClick={e => removeSavedAttraction(attraction.pageid)}/>
                  </div>
            </li>
            )}
        </ul>
        <div className="yourMapView">
          <h4>UNDER DEVELOPMENT</h4>
          <p>Your saved attractions will be displayed here on a map </p>
        </div>
        </div>
        <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <div>
                  {
                    props.attractionData &&
                    <YourAttractionsDetailsView handleClose={() => handleClose()}
                                  article={props.attractionData}
                    />
                  }
                </div>
             </Modal>
      </div>
  )
}

export default YourAttractionsView;
