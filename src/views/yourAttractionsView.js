import React from 'react';
import logo from '../images/wonderlust.png';
import logo1 from '../images/wonderlust1.png';
import logo2 from '../images/wonderlust2.png';
import remove from "../images/remove.png";
import "../css/yourAttractionsView.css";


function YourAttractionsView(props){
  //mockdata:
  const attractions = [ {pageid: 1, thumbnail: logo1, title: "1. Thailand: Krung Thep Maha Nakhon Amon Rattanakosin Mahinthara Ayutthaya Mahadilok Phop Noppharat Ratchathani Burirom Udom Ratchaniwet Mahasathan Amon Phiman Awatan Sathit Sakkathattiya Witsanu Kamprasit", pageimage: "logo1"},
                        {pageid: 2, thumbnail: logo2, title: "2. Wales:Llanfairpwllgwyngyll", pageimage: "logo2"},
                        {pageid: 3, title: "3. New Zeeland: Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"}
                      ]

  return(
      <div>
        <h1> Your saved attractions </h1>
        <div className="container">
        <ul className="list-container">
          {attractions.map(attraction =>
            <li className="list-item" key={attraction.pageid} onClick={e => ("")}>
                  <img id="list-image"
                      src={attraction.thumbnail ? attraction.thumbnail : logo}
                      alt={attraction.pageimage ? attraction.pageimage : "Wonderlust logo"}
                  />
                  <p id="list-title"> {attraction.title} </p>
                  <div id="list-buttons">
                    <button id="list-share"> Share </button>
                    <img id="list-trash"src={remove} disabled={true} onClick={e => "hej"}/>
                  </div>
                  
            </li>
            )}
        </ul>
        <div className="yourMapView">
          <h4>UNDER DEVELOPMENT</h4>
          <p>Your saved attractions will be displayed here on a map </p>
        </div>
        </div>
      </div>
  )
}

export default YourAttractionsView;