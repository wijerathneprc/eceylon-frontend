

import aboutImage from '../../assets/about-image.png'
import './AboutSection.css';


export function AboutSecction() {

    return (
        <>
            <div className="about-us-container">
                <div className="about-us-text">
                    <h2> About Us </h2>
                    <h3> We, at eCEYLON, offer you the convenience of online browsing, purchasing, and reserving electrical &
                        electronic products island wide in Sri Lanka</h3>
                </div>
                <img src={aboutImage} alt="" />
            </div>

        </>
    )
}