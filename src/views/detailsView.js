import React from 'react';

import '../css/detailsView.css';
import logo from '../images/wonderlust.png';
import logo1 from '../images/wonderlust1.png';
import logo2 from '../images/wonderlust2.png';

// rewrite this to only return the body
function DetailsView(props){
    return(
      <div>
         <div className="details-container" id="detailsCard">
                      <div className="details-header-item">
                          <img src={logo2} alt="Location tag"/>
                          <div className="header-title">
                              <h1>{props.article.title}</h1>
                              <h5>Attraction SubTitle </h5>
                          </div>
                          <button label="Close" type="button" onClick={props.handleClose}>X</button>
                      </div>

                      <div className="details-body-item">
                          <div className="card-body-left">
                              <p id="details-about"> {props.article.extract} </p>
                              <a href="https://sv.wikipedia.org/">Read more</a>
                          </div>
                          <div className="card-body-right">
                              <img id="details-image" src={logo} alt="Image of the attraction"/>
                              <div className="star-rating">
                                  <fieldset>
                                      <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Outstanding">5 stars</label>
                                      <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Very Good">4 stars</label>
                                      <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Good">3 stars</label>
                                      <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Poor">2 stars</label>
                                      <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Very Poor">1 star</label>
                                  </fieldset>
                              </div>
                                  <ul>
                                      <li>Wow, i love this place. I reccomend a visit!</li>
                                      <li>Probably the two most common comments were "timid" and "boring".</li>
                                  </ul>
                                  <input id="details-comment" type="text" placeholder="Leave a comment" onChange={e => props.onChange()}/>
                          </div>
                      </div>

                      <div className="details-footer-item">
                          <button disabled={true} onClick={e => props.onPress()}>How to get there</button>
                          <span>
                              <button disabled={true} onClick={e => props.onPress()}>Save</button>
                              <button disabled={true} onClick={e => props.onPress()}>Share</button>
                          </span>
                      </div>
                  </div>
      </div>
    );
}

export default DetailsView;
