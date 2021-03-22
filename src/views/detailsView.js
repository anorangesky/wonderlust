import '../css/detailsView.css';
import logo from '../images/wonderlust.png';
import logo1 from '../images/wonderlust1.png';
import logo2 from '../images/wonderlust2.png';

function DetailsView(props){
    return(
        <div>
            <button class="popup" onClick={openDetails}>Details Card
                <div class="details-container" id="detailsCard">
                    
                    <div class="details-header-item">
                        <img src={logo2} alt="Location tag"/>
                        <div class="header-title">
                            <h1>Attraction Title</h1>
                            <h5>Attraction SubTitle </h5>
                        </div>
                        <button label="Close" onPress={closeDetails}>X</button>
                    </div>

                    <div class="details-body-item">
                        <div class="card-body-left">
                            <p id="details-about"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ligula urna. Praesent sit amet leo ac nunc lacinia posuere quis id mi. Suspendisse metus nisl, aliquet quis ullamcorper ac, interdum vel ex. Vivamus lobortis lacus in justo vehicula, vel vehicula nunc tincidunt. Aenean id lorem vehicula, vestibulum nibh sed, condimentum sem. Sed posuere nisi ut tellus pellentesque, a consectetur massa viverra. Maecenas vitae urna et mi imperdiet sodales. Quisque a euismod risus. Vivamus maximus, quam quis rutrum eleifend, turpis justo porttitor justo, vitae porttitor tellus leo vel lacus. Donec fringilla, libero ac molestie blandit, justo risus dictum mi, quis aliquet quam turpis sed enim. Mauris pharetra condimentum lectus, eu vestibulum sem tempus et. </p>
                            <a href="https://sv.wikipedia.org/">Read more</a>
                        </div>
                        <div class="card-body-right">
                            <img id="details-image" src={logo} alt="Image of the attraction"/>
                            <div class="star-rating">
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

                    <div class="details-footer-item">
                        <button onPress={e => props.onPress()}>How to get there</button>
                        <span>
                            <button disabled={true} onPress={e => props.onPress()}>Save</button>
                            <button disabled={true} onPress={e => props.onPress()}>Share</button>
                        </span>
                    </div>
                </div>
            </button>
        </div>
    );
}

//TODO: should these functions be in this file?

function openDetails(){
    var popup = document.getElementById("detailsCard");
    popup.classList.toggle("show");

} 
//TODO: this function is not working rn. Clicking anywhere on the card will close the details view. 
function closeDetails(){
    document.getElementById("detailsCard").style.display = "none";
}

export default DetailsView;