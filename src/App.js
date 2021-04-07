import React from 'react';
import { connect } from 'react-redux'
import MapView from './views/mapView';
import TitleView from './views/titleView';
import SearchView from './views/searchView';
import AuthView from './views/authViews/AuthView';

import store from './redux/store'
import { getArticlesFromLocation } from './services/wikiSource'
import { mapAttractionListToProps, mapDispatchToMapView } from './redux/stateToProps';

// Just for testing, should be initialized with the users current position
getArticlesFromLocation(59.3294, 18.063240, 10000)
                      .then(data =>
                        store.dispatch({type: 'attractionList/setAttractions', attractions: data})
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
