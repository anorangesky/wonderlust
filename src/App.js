import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import MapView from './views/mapView';
import TitleView from './views/titleView';
import SearchView from './views/searchView';
import DetailsView from './views/detailsView';
import store from './redux/store'
import { getArticlesFromLocation } from './wikiSource'
import { mapAttractionListToProps } from './redux/stateToProps';

import ProfileView from './views/authViews/profileView';
//import UserProvider from "./providers/UserProvider";
//import {useUser} from 'reactfire';
  // 'useUser' returns the currently signed-in user
  //const { data: user } = useUser();

// Just for testing, should be initialized with the users current position
getArticlesFromLocation(59.3294, 18.063240, 10000)
                      .then(data => store.dispatch({type: 'attractionList/setAttractions', attractions: data}));

const MapPresenter = connect(mapAttractionListToProps)(MapView);

function App() {
  return (
    <React.Fragment>
        <TitleView/>
        <ProfileView/>
    </React.Fragment>
  );
}

export default App;
