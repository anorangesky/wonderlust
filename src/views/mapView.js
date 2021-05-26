import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import store from '../redux/store';
import { setCurrentPosition, setCurrentPositionZoom } from '../redux/slices/currentPositionSlice'
import { writeSavedAttraction } from '../services/firebase'
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


function MapView(props){
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  function mapLoaded(mapProps, map) {
    map.setOptions({
      styles: mapStyle
    })
    // If Google's Places API should be used it should probably be instantiated here
    // Alt. see "Manually loading the Google API" on https://www.npmjs.com/package/google-maps-react
  }

  function centerChanged(mapProps, map) {
    // map.setZoom(13);
  }

  function dragEnd(mapProps, map) {
    let center = map.getCenter();
    store.dispatch(setCurrentPosition({lat: center.lat(), lng: center.lng()}));
    store.dispatch(setCurrentPositionZoom(map.getZoom()));
    props.getArticles({lat: center.lat(), lng: center.lng()})
  }

  function zoomChanged(mapProps, map) {
    store.dispatch(setCurrentPositionZoom(map.getZoom()));
  }
// props.showDetails(attraction.pageid);

    return(
        <div className='mapView'>
            <Map google={props.google}
                  initialCenter={props.currentPosition.position}
                  center={props.currentPosition.position}
                  zoom={props.currentPosition.zoom}
                  zoomControl={false}
                  fullscreenControl={false}
                  streetViewControl={false}
                  mapTypeControl={false}
                  onReady={(mapProps, map) => mapLoaded(mapProps, map)}
                  onRecenter={(mapProps, map) => centerChanged(mapProps, map)}
                  onDragend={(mapProps, map) => dragEnd(mapProps, map)}
                  onZoomChanged={(mapProps, map) => zoomChanged(mapProps, map)}
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
                    <DetailsView handleClose={() => handleClose()}
                                onSave={writeSavedAttraction}
                                article={props.attractionData}
                                isUserLoggedIn={props.isUserLoggedIn}
                                isAttractionSaved={!!props.savedAttractions.find(e => e.pageid.to == props.attractionData.pageid)}
                    />
                  }
                </div>
             </Modal>
        </div>
    );
}

export default GoogleApiWrapper({apiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY})(MapView);
