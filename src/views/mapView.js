import {Map, GoogleApiWrapper} from "google-maps-react";
import '../style.css';

function MapView(props){
    return(
        <div class='mapView'>
            <Map google={props.google} initialCenter={{lat: 59.3294, lng: 18.063240}} zoomControl={false} fullscreenControl={false} /> 
        </div>
    ); 
}

export default GoogleApiWrapper({apiKey:"secret"})(MapView);
