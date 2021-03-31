import {Map, Marker, GoogleApiWrapper} from "google-maps-react";
import '../css/mapView.css';

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
    return(
        <div className='mapView'>
            <Map google={props.google}
                  initialCenter={props.currentLocation}
                  zoomControl={false}
                  fullscreenControl={false}
                  streetViewControl={false}
                  onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
             >
             {props.attractions.map((attraction) =>
               <Marker
                title={attraction.title}
                name={attraction.title}
                position={{
                  lat: attraction.lat,
                  lng: attraction.lon,
               }}
               key={attraction.pageid}
               />
             )}
             </Map>
        </div>
    );
}

export default GoogleApiWrapper({apiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY})(MapView);
