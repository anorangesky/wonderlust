import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import DetailsView from './views/detailsView';
import MapView from './views/mapView';
import TitleView from './views/titelView';

require('dotenv').config();
ReactDOM.render(
  <React.StrictMode>
    <TitleView/>
    <DetailsView/>
    <MapView/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
