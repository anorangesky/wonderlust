import { combineReducers } from 'redux';
import { getArticleContent } from '../services/wikiSource'
import currentPosition from './slices/currentPositionSlice'

export const setAttractions = attractions => {
  return {
    type: 'attractionList/setAttractions',
    payload: attractions,
  }
}

function attractionList(state = [], action) {
  switch (action.type) {
    case 'attractionList/setAttractions':
      return action.payload;
    default:
      return state;
  }
}

const initialCurrentAttraction = {
  id: null,
  data: null,
  error: null,
}
function currentAttraction(state = initialCurrentAttraction, action) {
  switch (action.type) {
    case 'currentAttraction/setId':
      return {
        ...state,
        id: action.id,
      }
    case 'currentAttraction/setData':
      return {
        ...state,
        data: action.data,
      }
    case 'currentAttraction/setError':
      return {
        ...state,
        error: action.error,
      }
    default:
      return state;
  }
}

export const setAttractionId = id => {
  return {
    type: 'currentAttraction/setId',
    id: id,
  }
}

export const setAttractionData = data => {
  return {
    type: 'currentAttraction/setData',
    data: data,
  }
}

export const setAttractionError = Error => {
  return {
    type: 'currentAttraction/setError',
    Error: Error,
  }
}

export function currentAttractionAction(attractionId) {
  return function(dispatch, getState) {
    // check if the attraction is the same as the current one
    if(attractionId === getState().currentAttraction.id) {
      return;
    }
    dispatch(setAttractionId(attractionId));
    dispatch(setAttractionData(null));
    dispatch(setAttractionError(null));
    if(attractionId) {
      getArticleContent(attractionId)
        .then(data => {
          if(getState().currentAttraction.id === attractionId) {
            dispatch(setAttractionData(data[0]));
          }})
        .catch(error => {
            dispatch(setAttractionError(error));
        });
    }
  }
}

const rootReducer = combineReducers({
  currentPosition,
  attractionList,
  currentAttraction,
})

export default rootReducer;
