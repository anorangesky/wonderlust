import React from 'react';
import { connect } from 'react-redux'
import MapView from './views/mapView';
import TitleView from './views/titleView';
import SearchView from './views/searchView';
import AuthView from './views/authViews/AuthView';

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


function App() {
  return (
    <React.Fragment>
      <TitleView/>
      <SearchViewPresenter/>
      <AuthView/>
      <MapPresenter/>
    </React.Fragment>
  );
}

export default App;
