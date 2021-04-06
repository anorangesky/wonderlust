import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

let preloadState = {
  currentLocation: {
    lat: 59.3294,
    lng: 18.063240,
  }
}

function composeTools(middleWare){
    return  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(middleWare) :
          middleWare;
}

const store = createStore(
    rootReducer,
    preloadState,
    composeTools(applyMiddleware(thunk)),
  );

export default store;
