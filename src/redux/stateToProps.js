import { registerWithEmail,
          signInWithEmail,
          signInWithGoogle,
          removeSavedAttraction,
          writeSavedAttraction,
          logOut } from '../services/firebase';
import { currentAttractionAction } from './reducer'
import { getUserPosition, getSearchPosition, getArticles,setCurrentPosition, setCurrentPositionZoom } from './slices/currentPositionSlice';

export function mapAttractionListToProps(state) {
  return {
    attractions: state.attractionList,
    currentPosition: state.currentPosition,
    attractionData: state.currentAttraction.data,
    attractionError: state.currentAttraction.error,
    isUserLoggedIn: state.userState.isUserLoggedIn,
    savedAttractions: state.userState.savedAttractions,
  }
}

export function mapDispatchToMapView(dispatch) {
  return {
    getArticle: (id) => dispatch(currentAttractionAction(id)),
    getArticles: (position) => dispatch(getArticles(position)),
    removeSavedAttraction: (pageid) => removeSavedAttraction(pageid),
    writeSavedAttraction: (attraction) => writeSavedAttraction(attraction),
    savePosition: (position) => dispatch(setCurrentPosition(position)),
    saveMapZoom: (zoomLevel) => dispatch(setCurrentPositionZoom(zoomLevel)),
  }
}

export function mapDispatchToSearchView(dispatch) {
  return {
    getUserPosition: () => dispatch(getUserPosition()),
    onTextInput: (query) => dispatch(getSearchPosition(query)),
    setMapZoom: (zoomLevel) => dispatch(setCurrentPositionZoom(zoomLevel)),
  }
}

export function mapUserStateToProps(state){
  return{
    isUserLoggedIn: state.userState.isUserLoggedIn,
    savedAttractions: state.userState.savedAttractions,
    attractionData: state.currentAttraction.data,
    user: state.userState.user,
  }
}

export function mapDispatchToNavigationView(){
  return{
    signInWithGoogle: () => signInWithGoogle(),
    signInWithEmail: (form) => signInWithEmail(form),
    registerWithEmail: (form) => registerWithEmail(form)
  }
}

export function mapDispatchToSettingsView() {
  return {
    logOut: () => logOut(),
  }
}
