import store from '../redux/store';
import { setCurrentPositionZoom } from '../redux/slices/currentPositionSlice'
import debounce from '../utilities/debounce';
import '../css/searchView.css';
import icon from '../images/location.png';

function SearchView(props) {
  const debouncedOnChange = debounce(text => {
      props.onTextInput(text);
      store.dispatch(setCurrentPositionZoom(13));
    }, 750);

  return(
    <div className="searchview">
      <div className="searchbar">
        <input type="search"
              id="locationSearch"
              placeholder="Find a location"
              onChange={e => debouncedOnChange(e.target.value)}
        />
      </div>
        <button className="currentlocation-btn" onClick={() => props.getUserPosition()}>
          <p>Go to your location</p>
          <img src={icon} alt="go to your location"/>
        </button>
    </div>
  );
}

export default  SearchView;
