import React from 'react';
import { connect } from 'react-redux'
import MapView from './views/mapView';
import SearchView from './views/searchView';
import SettingsView from './views/settingsView';
import Navbar from './views/navigationView';
import NotificationView from './views/notificationView';
import YourAttractionsView from './views/yourAttractionsView';
import AddAttractionView from './views/addAttractionView'
import LogInView from './views/authViews/LogInView';
import firebase from "firebase/app";
import "firebase/auth";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './redux/store'
import { getArticlesFromLocation } from './services/wikiSource'
import { mapAttractionListToProps,
          mapDispatchToMapView,
          mapDispatchToSearchView,
          mapUserStateToProps } from './redux/stateToProps';
import { setAttractions } from './redux/reducer';
import { getUserPosition } from './redux/slices/currentPositionSlice';

import userState from "./redux/slices/userState"

store.dispatch(getUserPosition());
// Just for testing, should be initialized with the users current position
getArticlesFromLocation(store.getState().currentPosition.position.lat,
                        store.getState().currentPosition.position.lng,
                        10000)
.then(data =>
  store.dispatch(setAttractions(data))
);

const MapPresenter = connect(mapAttractionListToProps,
                              mapDispatchToMapView)(MapView);
const SearchViewPresenter = connect(null, mapDispatchToSearchView)(SearchView);

const NavigationPresenter = connect(mapUserStateToProps,
                                    null)(Navbar);
const YourAttractionsPresenter = connect(mapUserStateToProps, 
                                            mapDispatchToMapView)(YourAttractionsView);

function App(props) {
  /* 
      check if user is online so they can't hack themself in     
  */
  let navigation;
  if (props.isUserLoggedIn){
    navigation = (
        <Switch>
            <Route path='/' exact component={MapPresenter}/>
            <Route path='/map' component={MapPresenter}/>
              <Route path='/addAttraction' component={AddAttractionView}/> 
              <Route path='/yourAttractions' component={YourAttractionsPresenter}/> 
              <Route path='/notifications' component={NotificationView}/>
              <Route path='/settings' component={SettingsView}/>            
        </Switch>
    )}else{
      navigation = (<MapPresenter/>)
  }

  return (
    <React.Fragment>
       <Router>
        <NavigationPresenter/>
        <SearchViewPresenter/>
        {navigation}
      </Router>         
    </React.Fragment>
  );
}

export default connect(mapUserStateToProps, null)(App);
