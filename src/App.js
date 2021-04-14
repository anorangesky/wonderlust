import React from 'react';
import { connect } from 'react-redux'
import MapView from './views/mapView';
import TitleView from './views/titleView';
import SearchView from './views/searchView';
import AuthView from './views/authViews/AuthView';

import store from './redux/store'
import { getArticlesFromLocation } from './services/wikiSource'
import { mapAttractionListToProps, mapDispatchToMapView } from './redux/stateToProps';
import { setAttractions } from './redux/reducer';
import { setCurrentPosition } from './redux/slices/currentPositionSlice'

var currentPosition = {
      lat: 59.3294,
      lng: 18.063240,
};

function getPosition(position) {
  currentPosition = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  // console.log("lat: " + position.coords.latitude + " lng: " + position.coords.longitude);
  store.dispatch(setCurrentPosition(currentPosition));
  // Just for testing, should be initialized with the users current position
  getArticlesFromLocation(currentPosition.lat, currentPosition.lng, 10000)
  .then(data =>
    store.dispatch(setAttractions(data))
  );
}

if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition);
  // console.log("lat: " + currentPosition.lat + " lng: " + currentPosition.lng);
} else {
  console.log("Unable to access your location");
}
// Just for testing, should be initialized with the users current position
getArticlesFromLocation(currentPosition.lat, currentPosition.lng, 10000)
.then(data =>
  store.dispatch(setAttractions(data))
);

const MapPresenter = connect(mapAttractionListToProps,
                              mapDispatchToMapView)(MapView);

function App() {
  return (
    <React.Fragment>
      <TitleView/>
      <SearchView/>
      <AuthView/>
      <MapPresenter/>
    </React.Fragment>
  );
}

export default App;
