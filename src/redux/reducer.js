import { combineReducers } from 'redux';

function currentLocation(state = null, action) {
  switch (action.type) {
    case 'currentLocation/setLocation':
      return action.location;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  currentLocation,
})

export default rootReducer;
