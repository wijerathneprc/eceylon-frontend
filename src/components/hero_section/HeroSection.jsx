
import heroImage from '../../assets/hero-image.png'
import './HeroSection.css';

export function HeroSection(){

    return(
        <>
        <div className="hero-container">
                <div className="hero-text-section">
                    <h1 className="logo-hero"> eCEYLON </h1>
                    <h1> The Online Store in Sri Lanka</h1>
                    <p>You can browser, buy and get delivered your favorite electrical and electronic devices at your finger tip
                    </p>
                    <a className="shop-now-button" href="#">Shop Now</a>
                </div>
                <div className="hero-image-section">
                    <img className="hero-image" src={heroImage} alt="Hero Image" />
                </div>
            </div>
        </>
    )
}