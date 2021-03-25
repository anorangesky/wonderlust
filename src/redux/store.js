import { createStore } from 'redux'
import rootReducer from './reducer'

let preloadState = {
  currentLocation: {
    lat: 59.3294,
    lng: 18.063240,
  }
}

const store = createStore(
    rootReducer,
    preloadState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;
