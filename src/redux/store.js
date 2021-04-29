import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

function composeTools(middleWare){
    return  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(middleWare) :
          middleWare;
}

const store = createStore(
    rootReducer,
    composeTools(applyMiddleware(thunk)),
  );

export default store;
