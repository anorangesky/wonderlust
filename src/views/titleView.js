import '../css/titleView.css';
import logo from '../images/wonderlust.png';
import logo1 from '../images/wonderlust1.png';
import logo2 from '../images/wonderlust2.png';

function TitleView(){
    return(
        <div>
            <div className="title-container">
                <img src={logo2} alt="wonderlust logo"/>
                <div className="header-title">
                    <h1>Wonderlust</h1>
                    <h5>Explore the unexpected</h5>
                </div>
            </div>
        </div>
    )
}

export default TitleView;