import { getArticlesFromLocation } from '../../services/wikiSource'
import { setAttractions } from '../reducer';

const initialCurrentPosition = {
  position: null,
  error: null,
}

export const setCurrentPosition = location => {
  return {
    type: 'currentPosition/setPosition',
    payload: location,
  }
}

export const setCurrentPositionError = error => {
  return {
    type: 'currentPosition/setError',
    payload: error,
  }
}


export function getUserPosition() {
  return function(dispatch, state) {
    function success(position) {
      let userPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      dispatch(setCurrentPosition(userPosition));
      getArticlesFromLocation(userPosition.lat, userPosition.lng, 10000)
      .then(data =>
        dispatch(setAttractions(data))
      );
    }

    function error(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("Location information is unavailable.")
          break;
        case error.TIMEOUT:
          console.log("The request to get user location timed out.")
          break;
        case error.UNKNOWN_ERROR:
          console.log("An unknown error occurred.")
          break;
        default:
          return
      }
    }

    if(navigator.geolocation) {
      // Use the geolocation API to try to get the users position
      navigator.geolocation.getCurrentPosition(success, error);
      // console.log("lat: " + currentPosition.lat + " lng: " + currentPosition.lng);
    } else {
      console.log("Unable to access your location");
    }
  }
}

export default function currentPosition(state = initialCurrentPosition, action) {
  switch (action.type) {
    case 'currentPosition/setPosition':
      return action.payload;
    case 'currentPosition/setError':
      return action.payload;
    default:
      return state;
  }
}
