import React from 'react';
import {Map, Marker, GoogleApiWrapper} from "google-maps-react";
import Modal from '@material-ui/core/Modal';
import '../css/mapView.css';
import DetailsView from './detailsView'

const mapStyle = [
  {
    featureType: 'poi',
    stylers: [
      {
        visibility: 'off',
      }
    ]
  },
  {
    featureType: 'poi.park',
    stylers: [
      {
        visibility: 'on',
      }
    ]
  },
]

function _mapLoaded(mapProps, map) {
   map.setOptions({
      styles: mapStyle
   })
}

function MapView(props){
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };
// props.showDetails(attraction.pageid);

    return(
        <div className='mapView'>
            <Map google={props.google}
                  initialCenter={props.currentPosition}
                  center={props.currentPosition}
                  zoomControl={false}
                  fullscreenControl={false}
                  streetViewControl={false}
                  onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
             >
             {props.attractions.map((attraction) =>
               <Marker
                key={attraction.pageid}
                title={attraction.title}
                name={attraction.title}
                position={{
                  lat: attraction.lat,
                  lng: attraction.lon,
                }}
                onClick={() => {props.getArticle(attraction.pageid); handleOpen()}}
               />
             )}
             </Map>
             <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <div>
                  {
                    props.attractionData &&
                    <DetailsView handleClose={() => handleClose()} article={props.attractionData}/>
                  }
                </div>
             </Modal>
        </div>
    );
}

export default GoogleApiWrapper({apiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY})(MapView);
