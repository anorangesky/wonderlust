import { currentAttractionAction } from './reducer'

export function mapAttractionListToProps(state) {
  return {
    attractions: state.attractionList,
    currentLocation: state.currentLocation,
    attractionData: state.currentAttraction.data,
    attractionError: state.currentAttraction.error,
  }
}

export function mapDispatchToMapView(dispatch) {
  return {
    getArticle: (id) => dispatch(currentAttractionAction(id)),
  }
}
