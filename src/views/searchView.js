import '../css/searchView.css';
import icon from '../images/location.png'

function SearchView(props) {
  return(
    <div className="searchview">
      <div className="searchbar">
        <input type="search"
              id="locationSearch"
              placeholder="Find a place"
              onChange={e => props.onChange()}
        />
      </div>
        <button className="currentlocation-btn" onClick={e => props.onPress()}>
          <img src={icon} alt="go to your location"/>
        </button>
    </div>
  );
}

export default SearchView;
