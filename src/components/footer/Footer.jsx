

import facebookIcon from '../../assets/icons/facebook-white.png';
import instagramIcon from '../../assets/icons/instagram-white.png';
import youtubeIcon from '../../assets/icons/youtube-white.png';
import linkedinIcon from '../../assets/icons/linkedin-white.png';


import './Footer.css';

export function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="browse-more">
                    <a className="logo-footer" href="index.html">eCYELON</a>
                    <h3> Browse and Buy on eCEYLON</h3>
                    <a href="/product_lists.html">products</a>
                    <a href="/login.htlm">login</a>

                </div>

                <div className="find-more">
                    <h3> Find More on eCEYLON </h3>
                    <a href="/aboutus.html">About us</a>
                    <a href="/pricacy_policy.html"> Privacy&Policy </a>
                    <a href="/terms_of_services.html"> Terms of Service </a>
                    <a href="/contactus.html"> Contact Us </a>
                </div>
                <div className="social-media">
                    <h3>Follow Us on Social Media</h3>
                    <a href="https://www.facebook.com/"> <img src={facebookIcon} alt="" /> Facebook
                    </a>
                    <a href="https://www.youtube.com/"> <img src={youtubeIcon} alt="" /> YouTube </a>
                    <a href="http://instagram.com//"> <img src={instagramIcon} alt="" /> Instagram
                    </a>
                    <a href="https://www.linkedin.com/"> <img src={linkedinIcon} alt="" /> LinkedIn
                    </a>
                </div>

                <div className="copy-right">
                    <hr />
                    &copy; 2024 eCEYLON. All rights reserved.
                </div>
            </div>

        </>

    )
}


