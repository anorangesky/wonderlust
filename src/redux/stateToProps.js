import { currentAttractionAction } from './reducer'
import { getUserPosition, getSearchPosition } from './slices/currentPositionSlice';

export function mapAttractionListToProps(state) {
  return {
    attractions: state.attractionList,
    currentPosition: state.currentPosition,
    attractionData: state.currentAttraction.data,
    attractionError: state.currentAttraction.error,
    isUserLoggedIn: state.userState.isUserLoggedIn,
  }
}

export function mapDispatchToMapView(dispatch) {
  return {
    getArticle: (id) => dispatch(currentAttractionAction(id)),
  }
}

export function mapDispatchToSearchView(dispatch) {
  return {
    getUserPosition: () => dispatch(getUserPosition()),
    onTextInput: (query) => dispatch(getSearchPosition(query))
  }
}

export function mapUserStateToProps(state){
  return{
    isUserLoggedIn: state.userState.isUserLoggedIn
  }
}
