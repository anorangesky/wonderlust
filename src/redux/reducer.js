import { combineReducers } from 'redux';

function currentLocation(state = null, action) {
  switch (action.type) {
    case 'currentLocation/setLocation':
      return action.location;
    default:
      return state;
  }
}

function attractionList(state = [], action) {
  switch (action.type) {
    case 'attractionList/setAttractions':
      return action.attractions;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  currentLocation,
  attractionList,
})

export default rootReducer;
