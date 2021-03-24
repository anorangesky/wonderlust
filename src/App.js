import './App.css';
import React from 'react';
import MapView from './views/mapView';
import TitleView from './views/titleView';
import SearchView from './views/searchView';
import DetailsView from './views/detailsView';

function App() {
  return (
    <React.Fragment>
      <TitleView/>
      <SearchView/>
      <DetailsView/>

      <MapView/>
    </React.Fragment>
  );
}

export default App;
