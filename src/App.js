import React from 'react';
import { connect } from 'react-redux'
import MapView from './views/mapView';
import TitleView from './views/titleView';
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
          mapDispatchToSearchView } from './redux/stateToProps';
import { setAttractions } from './redux/reducer';
import { getUserPosition } from './redux/slices/currentPositionSlice';

store.dispatch(getUserPosition());

// Just for testing, should be initialized with the users current position
getArticlesFromLocation(store.getState().currentPosition.lat,
                        store.getState().currentPosition.lng,
                        10000)
.then(data =>
  store.dispatch(setAttractions(data))
);

const MapPresenter = connect(mapAttractionListToProps,
                              mapDispatchToMapView)(MapView);
const SearchViewPresenter = connect(null, mapDispatchToSearchView)(SearchView);

var user = firebase.auth().currentUser;

function App() {
  let navigation = (
    <Switch>
          <Route path='/' exact component={MapPresenter}/>
          <Route path='/login' component={LogInView}/>

          
    </Switch>
  )
  if(user){
    navigation =(
      <Switch>
          <Route path='/' exact component={MapPresenter}/>
          <Route path='/addAttraction' component={AddAttractionView}/>
          <Route path='/yourAttractions' component={YourAttractionsView}/>
          <Route path='/notifications' component={NotificationView}/>
          <Route path='/settings' component={SettingsView}/>
        </Switch>
    )
  }
  return (
    <React.Fragment>
       <Router>
        <Navbar/>
        <SearchViewPresenter/>
        {navigation}
      </Router>         
    </React.Fragment>
  );
}

export default App;
