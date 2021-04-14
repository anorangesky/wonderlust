const initialCurrentPosition = {
  position: null,
  error: null,
}

export const setCurrentPosition = location => {
  return {
    type: 'currentPosition/setPosition',
    payload: location,
  }
}

export const setCurrentPositionError = error => {
  return {
    type: 'currentPosition/setError',
    payload: error,
  }
}

export default function currentPosition(state = initialCurrentPosition, action) {
  switch (action.type) {
    case 'currentPosition/setPosition':
      return action.payload;
    case 'currentPosition/setError':
      return action.payload;
    default:
      return state;
  }
}
