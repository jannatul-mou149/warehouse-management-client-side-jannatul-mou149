import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="main-row">
                    <div className="single_footer">
                        <h4>Address</h4>
                        <ul>
                            <li><a href="/">824/A, Uttara</a></li>
                            <li><a href="/">Building No. 12, Road No. 2</a></li>
                            <li><a href="/">Ground Floor, Showroom no. 111 - 109</a></li>
                            <li><a href="/">Beside Star Tech Showroom</a></li>
                            <li><a href="/">Dhaka ,Bangladesh</a></li>
                        </ul>
                    </div>
                    <div className="single_footer single_footer_address">
                        <h4>Page Link</h4>
                        <ul>
                            <li><a href="/">Facebook</a></li>
                            <li><a href="/">Twitter</a></li>
                            <li><a href="/">Google+</a></li>
                            <li><a href="/">Instagram</a></li>
                            <li><a href="/">Youtube</a></li>
                        </ul>
                    </div>
                    <div className="sub-social">
                        <div className="single_footer single_footer_address">
                            <h4>Join Us</h4>
                            <ul>
                                <li><a href="/">We are avaiable</a></li>
                                <li><a href="/">On Socail Platforms</a></li>
                            </ul>

                        </div>
                        <div className="social_profile">
                            <ul>
                                <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="/"><i className="fab fa-google-plus-g"></i></a></li>
                                <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="copy-right">
                        <p className="copyright">Copyright © 2022 <a href="/">AutoMoto</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;