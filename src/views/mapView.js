import {Map, GoogleApiWrapper} from "google-maps-react";
import '../css/mapView.css';
import store from '../redux/store'

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

const initialCoordinates = store.getState().currentLocation;

function MapView(props){
    return(
        <div className='mapView'>
            <Map google={props.google}
                  initialCenter={initialCoordinates}
                  zoomControl={false}
                  fullscreenControl={false}
                  streetViewControl={false}
                  onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
             />
        </div>
    );
}

export default GoogleApiWrapper({apiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY})(MapView);
