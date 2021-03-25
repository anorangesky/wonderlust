import '../css/searchView.css';
import icon from '../images/location.png'

function SearchView(props) {
  return(
    <div className="search">
      <input type="search"
            id="locationSearch"
            placeholder="Find a place"
            onChange={e => props.onChange()}
      />
      <button onClick={e => props.onPress()}>
        <img src={icon} alt="go to your location"/>
      </button>
    </div>
  );
}

export default SearchView;
