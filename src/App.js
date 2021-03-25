import './App.css';
import React from 'react';
import { connect } from 'react-redux'
import MapView from './views/mapView';
import TitleView from './views/titleView';
import SearchView from './views/searchView';
import DetailsView from './views/detailsView';

import store from './redux/store'
import { getArticlesFromLocation } from './wikiSource'
import { mapAttractionListToProps } from './redux/stateToProps';

// Just for testing
getArticlesFromLocation(59.3294, 18.063240, 10000)
                      .then(data => store.dispatch({type: 'attractionList/setAttractions', attractions: data}));

const MapPresenter = connect(mapAttractionListToProps)(MapView);

function App() {
  return (
    <React.Fragment>
      <TitleView/>
      <SearchView/>
      <DetailsView/>
      <MapPresenter/>
    </React.Fragment>
  );
}

export default App;
