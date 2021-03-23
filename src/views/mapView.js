import {Map, GoogleApiWrapper} from "google-maps-react";
import '../css/mapView.css';

function MapView(props){
    return(
        <div class='mapView'>
            <Map google={props.google}
                  initialCenter={{lat: 59.3294, lng: 18.063240}}
                  zoomControl={false}
                  fullscreenControl={false}
                  streetViewControl={false}
             />
        </div>
    );
}

export default GoogleApiWrapper({apiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY})(MapView);
