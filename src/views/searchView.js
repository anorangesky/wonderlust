import { Link, useHistory, useLocation } from "react-router-dom";
import debounce from '../utilities/debounce';
import '../css/searchView.css';
import icon from '../images/location.png';

function SearchView(props) {
  const history = useHistory();
  const location =  useLocation();

  const debouncedOnChange = debounce(text => {
      props.onTextInput(text);
      props.setMapZoom(13)
      if(location.pathname !== '/map') {
        history.push('/map');
      }
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
      <Link className='currentlocation-link' to='/map'>
        <button className="currentlocation-btn" onClick={() => props.getUserPosition()}>
          <p>Go to your location</p>
          <img src={icon} alt="go to your location"/>
        </button>
      </Link>
    </div>
  );
}

export default  SearchView;
