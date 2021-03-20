import logo from '../images/wonderlust2.png';
import logo2 from '../images/wonderlust2.png';

function DetailsView(props){
    return(
        <div>
            <button class="popup" onClick={openPopup}>Details Card
                <div class="details-container" id="detailsCard">
                    
                    <div class="details-header-item">
                        <img src={logo2}/>
                        <div class="header-title">
                            <h1>Attraction Title</h1>
                            <h5>Attraction SubTitle </h5>
                        </div>
                        <button>X</button>
                    </div>

                    <div class="details-body-item">
                        <div class="card-body-left">
                            <p> information about the attraction</p>
                            <a href="https://sv.wikipedia.org/">Read more</a>
                        </div>
                        <div class="card-body-right">
                            <img src={logo}/>
                            <p>Rating</p>
                            <p>Comments</p>
                            <input type="text"/>
                        </div>
                    </div>

                    <div class="details-footer-item">
                        <button>Get there</button>
                        <button disabled={true}>Save</button>
                        <button disabled={true}>Share</button>
                    </div>
                </div>
            </button>
        </div>
    );
}
function openPopup(){
    var popup = document.getElementById("detailsCard");
    popup.classList.toggle("show");
} 

export default DetailsView;