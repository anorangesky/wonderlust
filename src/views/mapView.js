import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
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

  function dragEnd(mapProps, map) {
    let center = map.getCenter();
    props.savePosition({lat: center.lat(), lng: center.lng()})
    props.saveMapZoom(map.getZoom());
    props.getArticles({lat: center.lat(), lng: center.lng()})
  }

  function zoomChanged(mapProps, map) {
    props.saveMapZoom(map.getZoom());
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
                                onSave={props.writeSavedAttraction}
                                article={props.attractionData}
                                isUserLoggedIn={props.isUserLoggedIn}
                                isAttractionSaved={!!props.savedAttractions.find(e => parseInt(e.pageid) === props.attractionData.pageid)}
                                removeSavedAttraction={props.removeSavedAttraction}
                    />
                  }
                </div>
             </Modal>
        </div>
    );
}

export default GoogleApiWrapper({apiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY})(MapView);
