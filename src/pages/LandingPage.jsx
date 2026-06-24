import './LandingPage.css'
import '../assets/landingimage.png'
import { Link } from "react-router-dom";
function LandingPage(){
    return(
        <div className="landing-page">
            <div className="overlay">
        <div className="intro-txt">
            <h1 >Welcome to the Ecommerce Website</h1>
            <p >"Meet your new favorite. 🌟 Our latest collection is officially live and waiting for you."
                <br></br>"The wait is over! Fresh drops have arrived just in time to upgrade your routine."<br></br>
                "Be the first to own it. Discover what’s trending in our New Arrivals section today!"</p>
            <Link  className='link' to='/products'>Products</Link>
            <br></br>
             {/* <Link to='/cart'>View Cart</Link>  */}
        </div>
        </div>
        </div>
    )
}
export default LandingPage;