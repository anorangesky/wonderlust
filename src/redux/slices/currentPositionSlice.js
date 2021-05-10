import { getArticlesFromLocation } from '../../services/wikiSource'
import { getPlaceCoordinates } from "../../services/geocoding";
import { setAttractions } from '../reducer';

const initialCurrentPosition = {
  position: {
    lat: 59.266944,
    lng: 15.196389  ,
  },
  error: null,
  zoom: 13,
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

export const setCurrentPositionZoom = zoom => {
  return {
    type: 'currentPosition/setZoom',
    payload: zoom,
  }
}


export function getUserPosition() {
  return function(dispatch, getState) {
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

export function getSearchPosition(query) {
  return function(dispatch, getState) {
    if(!query) { // Ensure we don't send unecessary empty queries to the API
      return
    }
    dispatch(setCurrentPositionError(null));
    // Request coordinates for the given place from the OpenCage API
    getPlaceCoordinates(query)
      .then(data => {
          console.log(data[0]);
          let position = {
            lat: data[0].geometry.lat,
            lng: data[0].geometry.lng,
          }
          dispatch(setCurrentPosition(position));
          // Get the articles for the returned coordinates
          getArticlesFromLocation(position.lat, position.lng, 10000)
          .then(data =>
            dispatch(setAttractions(data))
          );
        }
      )
      .catch(error => dispatch(setCurrentPositionError(error)));
  }
}

export default function currentPosition(state = initialCurrentPosition, action) {
  switch (action.type) {
    case 'currentPosition/setPosition':
      return {
        ...state,
        position: action.payload,
      }
    case 'currentPosition/setError':
      return {
        ...state,
        error: action.payload,
      }
    case 'currentPosition/setZoom':
      return {
        ...state,
        zoom: action.payload,
      }
    default:
      return state;
  }
}
