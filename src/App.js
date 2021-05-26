import React from 'react';
import { connect } from 'react-redux'
import MapView from './views/mapView';
import SearchView from './views/searchView';
import SettingsView from './views/settingsView';
import Navbar from './views/navigationView';
import NotificationView from './views/notificationView';
import YourAttractionsView from './views/yourAttractionsView';
import AddAttractionView from './views/addAttractionView'
import "firebase/auth";
import { onLoginSuccess } from './services/firebase'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './redux/store'
import { getArticlesFromLocation } from './services/wikiSource'
import { mapAttractionListToProps,
          mapDispatchToMapView,
          mapDispatchToNavigationView,
          mapDispatchToSearchView,
          mapUserStateToProps,
          mapDispatchToSettingsView } from './redux/stateToProps';
import { setAttractions } from './redux/reducer';
import { getUserPosition } from './redux/slices/currentPositionSlice';

// import userState from "./redux/slices/userState"

store.dispatch(getUserPosition());
getArticlesFromLocation(store.getState().currentPosition.position.lat,
                        store.getState().currentPosition.position.lng,
                        10000)
.then(data =>
  store.dispatch(setAttractions(data))
);

// Check if user is already logged in
const user = JSON.parse(localStorage.getItem('user'))
if(user) {
  onLoginSuccess(user)
}

// Create presenters
const MapPresenter = connect(mapAttractionListToProps,
                              mapDispatchToMapView)(MapView);
const SearchPresenter = connect(null, mapDispatchToSearchView)(SearchView);

const NavigationPresenter = connect(mapUserStateToProps,
                                    mapDispatchToNavigationView)(Navbar);
const YourAttractionsPresenter = connect(mapUserStateToProps,
                                            mapDispatchToMapView)(YourAttractionsView);
const SettingsPresenter = connect(mapUserStateToProps, mapDispatchToSettingsView)(SettingsView)

function App(props) {
  /*      check if user is online so they can't hack themself in  */
  let navigation;
  if (props.isUserLoggedIn){
    navigation = (
        <Switch>
            <Route path='/' exact component={MapPresenter}/>
            <Route path='/map' component={MapPresenter}/>
            <Route path='/addAttractions' component={AddAttractionView} />
            <Route path='/yourAttractions' component={YourAttractionsPresenter}/>
            <Route path='/notifications'component={NotificationView}/>
            <Route path='/settings' component={SettingsPresenter}/>
        </Switch>
    )}else{
      navigation = (<MapPresenter/>)
  }

  return (
    <React.Fragment>
       <Router>
        <NavigationPresenter/>
        <SearchPresenter/>
        {navigation}
      </Router>
    </React.Fragment>
  );
}

export default connect(mapUserStateToProps, null)(App);
