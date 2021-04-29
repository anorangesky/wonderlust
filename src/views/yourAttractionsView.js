import React from 'react';
import YourList from './yourListView';
import YourMap from './yourMapView';

function YourAttractionsView(){

  return(
    <div>
        <h1> Your saved attractions </h1>
        <YourList/>
        <YourMap/>
      </div>
  )
}

export default YourAttractionsView;