export function mapAttractionListToProps(state) {
  return {
    attractions: state.attractionList,
    currentLocation: state.currentLocation,
  }
}
